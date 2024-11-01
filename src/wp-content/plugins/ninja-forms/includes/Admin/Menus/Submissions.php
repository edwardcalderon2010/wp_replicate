<?php if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Class NF_Admin_Menus_Submissions
 */
final class NF_Admin_Menus_Submissions extends NF_Abstracts_Submenu
{
    /**
     * @var string
     */
    public $parent_slug = 'ninja-forms';

    /**
     * @var string
     */
    public $page_title = 'Submissions';

    /**
     * @var string
     */
    public $menu_slug = 'nf-submissions';

    /**
     * @var int
     */
    public $position = 3;

    /** @var int */
    public $load_legacy;
    
    /**
     * Constructor
     */
    public function __construct()
    {
        parent::__construct();

        $this->load_legacy = intval( Ninja_Forms()->get_setting( 'load_legacy_submissions' ) );

        if ( $this->load_legacy )
        {
            $this->menu_slug = 'edit.php?post_type=nf_sub';

            $this->function = NULL;

            add_filter( 'manage_nf_sub_posts_columns', array( $this, 'change_columns' ) );

            add_action( 'manage_posts_custom_column', array( $this, 'custom_columns' ), 10, 2 );

            add_filter('months_dropdown_results', array( $this, 'remove_filter_show_all_dates' ), 9999 );

            add_action( 'restrict_manage_posts', array( $this, 'add_filters' ) );

            add_filter( 'parse_query', array( $this, 'table_filter' ) );

            add_filter( 'posts_clauses', array( $this, 'search' ), 20, 1 );

            add_filter( 'bulk_actions-edit-nf_sub', array( $this, 'remove_bulk_edit' ) );

            add_action( 'admin_footer-edit.php', array( $this, 'bulk_admin_footer' ) );

            add_action( 'load-edit.php', array( $this, 'export_listen' ) );

            add_action('admin_head', array( $this, 'hide_page_title_action' ) );

            // This will only run on our post type.
            add_action( 'views_edit-nf_sub', array( $this, 'change_views' ) );

            // add_action( 'admin_init', array( $this, 'nf_upgrade_redirect' ) );

            //Add bulk actions on the Submissions interface
            add_filter( 'bulk_actions-edit-nf_sub', [ $this, 'manage_bulk_actions' ] );

            add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_legacy_scripts' ) );

        }
        else
        {
            add_action( 'admin_body_class', array( $this, 'body_class' ) );

            add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

            add_action('current_screen',  [$this, 'remove_legacy_submissions_page']);
        }

    }

    /**
     * Remove the old Submissions page link when legacy mode is not enabled
     *
     * @param $screen object of current screen details
     */
    public function remove_legacy_submissions_page( $screen ) {
        if ( "nf_sub" === $screen->post_type && $screen->id === "edit-nf_sub") {
            $form_id = !empty($_GET["form_id"]) ? "&form_id=" . $_GET["form_id"] : "";
            wp_safe_redirect( admin_url( "admin.php?page=nf-submissions" . $form_id ), 302, "Ninja Forms");
            exit;
        }
    }
    /**
     * Add an option in the bulk action select field
     */
    public function manage_bulk_actions($bulk_actions) {
        $bulk_actions['trigger-email-action'] = __('Trigger Email Action', 'ninja-forms');
        return $bulk_actions;
    }

    /**
     * If we have required updates, redirect to the main Ninja Forms page
     */
    public function nf_upgrade_redirect() {
        global $pagenow;

        if( "1" == get_option( 'ninja_forms_needs_updates' ) ) {
            // remove_submenu_page( $this->parent_slug, $this->menu_slug );
            // if( 'edit.php' == $pagenow && 'nf_sub' == $_GET[ 'post_type' ] ) {
            //     wp_safe_redirect( admin_url( 'admin.php?page=ninja-forms' ), 301 );
            //     exit;
            // }
        }
    }

    /**
     * Change Views
     * WordPress hook that modifies the links on our submissions CPT to allow
     * users to switch between completed and trashed submissions.
     * @since 3.2.17
     *
     * @param $views The views that are associated with this CPT.
     *      $views[ 'view' ]
     * @return array Returns modified views to allow our users access to the trash.
     */
    public function change_views( $views )
    {
        // Remove our unused views.
        unset( $views[ 'mine' ] );
        unset( $views[ 'publish' ] );

        // If the Form ID is not empty and IS a number...
        if( ! empty( $_GET[ 'form_id' ] ) && ctype_digit( $_GET[ 'form_id' ] ) ) {
            // ...populate the rest of the query string.
            $form_id = '&form_id=' . absint($_GET[ 'form_id' ]) . '&nf_form_filter&paged=1';
        } else {
            // ...otherwise send in an empty string.
            $form_id = '';
        }

        // Build our new views.
        $views[ 'all' ] = '<a href="' . admin_url( 'edit.php?post_status=all&post_type=nf_sub'  ) . $form_id . '">'
                        . esc_html__( 'Completed', 'ninja-forms' ) . '</a>';

        $views[ 'trash' ] = '<a href="' . admin_url( 'edit.php?post_status=trash&post_type=nf_sub' ) . $form_id . '">'
                            . esc_html__( 'Trashed', 'ninja-forms' ) . '</a>';

        // Checks to make sure we have a post status.
        if( ! empty( $_GET[ 'post_status' ] ) ) {
            // Depending on the domain set the value to plain text.
            if ( 'all' == $_GET[ 'post_status' ] ) {
                $views[ 'all' ] = esc_html__( 'Completed', 'ninja-forms' );
            } else if ( 'trash' == $_GET[ 'post_status' ] ) {
                $views[ 'trash' ] = esc_html__( 'Trashed', 'ninja-forms' );
            }
        }

        return $views;
    }

    /**
     * Change Columns
     *
     * @return array
     */
    public function change_columns()
    {
        // if the form_id isset and ID a number
        $form_id = ( isset( $_GET['form_id'] ) && ctype_digit( $_GET[ 'form_id' ] ) ) ? absint($_GET['form_id']) : FALSE;

        if( ! $form_id ) return array();

        static $cols;

        if( $cols ) return $cols;

        $cols = array(
            'cb'    => '<input type="checkbox" />',
            'seq_num' => esc_html__( '#', 'ninja-forms' ),
        );

        $fields = Ninja_Forms()->form( $form_id )->get_fields();

        $hidden_field_types = apply_filters( 'ninja_forms_sub_hidden_field_types', array() );

        foreach( $fields as $field ){

            if ( is_null( $field ) ) continue;

            if( in_array( $field->get_setting( 'type' ), $hidden_field_types ) ) continue;

            if ( $field->get_setting( 'admin_label' ) ) {
                $cols[ 'field_' . $field->get_id() ] = $field->get_setting( 'admin_label' );
            } else {
                $cols[ 'field_' . $field->get_id() ] = $field->get_setting( 'label' );
            }

        }

        $cols[ 'sub_date' ] = esc_html__( 'Date', 'ninja-forms' );

        return $cols;
    }

    /**
     * Custom Columns
     *
     * @param $column
     * @param $sub_id
     */
    public function custom_columns( $column, $sub_id )
    {
        global $post_type;

        if ( 'nf_sub' !== $post_type ) return false;

        $sub = Ninja_Forms()->form()->get_sub( $sub_id );

        switch( $column ){
            case 'seq_num':
                echo $this->custom_columns_seq_num( $sub );
                break;
            case 'sub_date':
                echo $this->custom_columns_sub_date( $sub );
                break;
            default:
                echo $this->custom_columns_field( $sub, $column );
        }
    }

    /**
     * Remove Filter: Show All Dates
     *
     * @param $months
     * @return array
     */
    public function remove_filter_show_all_dates( $months )
    {
        if( ! isset( $_GET[ 'post_type' ] ) || 'nf_sub' != $_GET[ 'post_type' ] ) return $months;

        // Returning an empty array should hide the dropdown.
        return array();
    }

    /**
     * Add Filters
     *
     * @return bool
     */
    public function add_filters()
    {
        global $typenow;

        // Bail if we aren't in our submission custom post type.
        if ( $typenow != 'nf_sub' ) return false;

        $forms = Ninja_Forms()->form()->get_forms();

        $form_options = array();
        foreach( $forms as $form ){
            $form_options[ $form->get_id() ] = $form->get_setting( 'title' );
        }
        $form_options = apply_filters( 'ninja_forms_submission_filter_form_options', $form_options );
        asort($form_options);


        // make sure form_id isset and is a number
        if( isset( $_GET[ 'form_id' ] ) && ctype_digit( $_GET[ 'form_id' ] ) ) {
            $form_selected = intval($_GET[ 'form_id' ]);
        } else {
            $form_selected = 0;
        }

        if( isset( $_GET[ 'begin_date' ] ) ) {
            // check for bad characters(possible xss vulnerability)
            $beg_date_sep = preg_replace('/[0-9]+/', '', WPN_Helper::sanitize_text_field($_GET[ 'begin_date' ]));

            if ( 1 !== count( array_unique( str_split( $beg_date_sep ) ) ) ) {// We got bad data.
                $begin_date = '';
            } else {
                $begin_date = WPN_Helper::sanitize_text_field($_GET['begin_date']);
            }
        } else {
            $begin_date = '';
        }

        if( isset( $_GET[ 'end_date' ] ) ) {
            // check for bad characters(possible xss vulnerability)
            $end_date_sep = preg_replace('/[0-9]+/', '', WPN_Helper::sanitize_text_field($_GET[ 'end_date' ]));

            if ( 1 !== count( array_unique( str_split( $end_date_sep ) ) ) ) {// We got bad data.
                $end_date = '';
            } else {
                $end_date = WPN_Helper::sanitize_text_field($_GET['end_date']);
            }
        } else {
            $end_date = '';
        }

        Ninja_Forms::template( 'admin-menu-subs-filter.html.php', compact( 'form_options', 'form_selected', 'begin_date', 'end_date' ) );

        wp_enqueue_script('jquery-ui-datepicker');
        wp_enqueue_style( 'jquery-ui-datepicker', Ninja_Forms::$url .'lib/Legacy/jquery-ui-fresh.min.css' );
    }

    public function table_filter( $query )
    {
        global $pagenow;

        if( $pagenow != 'edit.php' || ! is_admin() || ! isset( $query->query['post_type'] ) || 'nf_sub' != $query->query['post_type'] || ! is_main_query() ) return;

        $vars = &$query->query_vars;

        // make sure form_id is not empty and is a number
        $form_id = ( ! empty( $_GET['form_id'] ) && ctype_digit( $_GET[ 'form_id' ] ) ) ? intval($_GET['form_id']) : 0;

        $vars = $this->table_filter_by_form( $vars, $form_id );

        $vars = $this->table_filter_by_date( $vars );

        $vars = apply_filters( 'ninja_forms_sub_table_qv', $vars, $form_id );
    }

    /**
     * @updated 3.3.21.2
     */
    public function search( $pieces ) {
        global $typenow;
        // filter to select search query
        if ( isset ( $_GET['s'] ) && $typenow == 'nf_sub' && is_search() && is_admin() ) {
            global $wpdb;

            $keywords = explode(' ', get_query_var('s'));

            $query = "";

            foreach ($keywords as $word) {

                $wpdb->escape_by_ref( $word );
                $query .= " (mypm1.meta_value  LIKE '%{$word}%') OR ";
            }

            if (!empty($query)) {
                // Escape place holders for the where clause.
                $pieces[ 'where' ] = $wpdb->remove_placeholder_escape( $pieces[ 'where' ] );

                // add to where clause
                $pieces[ 'where' ] = str_replace("((({$wpdb->posts}.post_title LIKE '%", "({$query}(({$wpdb->posts}.post_title LIKE '%", $pieces[ 'where' ]);

                $pieces[ 'join' ] = $pieces[ 'join' ] . " INNER JOIN {$wpdb->postmeta} AS mypm1 ON ({$wpdb->posts}.ID = mypm1.post_id)";

            }
        }
        return ( $pieces );
    }

    public function remove_bulk_edit( $actions ) {
        unset( $actions['edit'] );
        return $actions;
    }

    public function bulk_admin_footer() {
        global $post_type;

        if ( ! is_admin() )
            return false;

        if( $post_type == 'nf_sub' && isset ( $_REQUEST['post_status'] ) && $_REQUEST['post_status'] == 'all' ) {
            ?>
            <script type="text/javascript">
                jQuery(document).ready(function() {
                    jQuery('<option>').val('export').text('<?php esc_html_e('Export', 'ninja-forms')?>').appendTo("select[name='action']");
                    jQuery('<option>').val('export').text('<?php esc_html_e('Export', 'ninja-forms')?>').appendTo("select[name='action2']");
                    <?php
                    if ( ( isset ( $_POST['action'] ) && $_POST['action'] == 'export' ) || ( isset ( $_POST['action2'] ) && $_POST['action2'] == 'export' ) ) {
                        ?>
                    setInterval(function(){
                        jQuery( "select[name='action'" ).val( '-1' );
                        jQuery( "select[name='action2'" ).val( '-1' );
                        jQuery( '#posts-filter' ).submit();
                    },5000);
                    <?php
                }

                if ( isset ( $_REQUEST['form_id'] ) && ! empty ( $_REQUEST['form_id'] ) ) {
                    $redirect = urlencode( remove_query_arg( array( 'download_all', 'download_file' ) ) );
                    $url = admin_url( 'admin.php?page=nf-processing&action=download_all_subs&form_id=' . absint( $_REQUEST['form_id'] ) . '&redirect=' . $redirect . '&security=' . wp_create_nonce( 'ninja_forms_batch_nonce' ) );
                    $url = esc_url( $url );
                    ?>
                    var button = '<a href="<?php echo $url; ?>" class="button-secondary nf-download-all"><?php echo esc_html__( 'Download All Submissions', 'ninja-forms' ); ?></a>';
                    <?php
                }

                if ( isset ( $_REQUEST['download_all'] ) && $_REQUEST['download_all'] != '' ) {
                    $redirect = esc_url_raw( add_query_arg( array( 'download_file' => esc_html( $_REQUEST['download_all'] ) ) ) );
                    $redirect = remove_query_arg( array( 'download_all' ), $redirect );
                    ?>
                    document.location.href = "<?php echo $redirect; ?>";
                    <?php
                }

                ?>
                });
            </script>
            <?php
        }
    }

    public function export_listen()
    {
        $current_user_can_get_nf_submissions = apply_filters( 'ninja_forms_api_allow_get_submissions', current_user_can( 'manage_options' ) );
        // Ensure that we are in admin and user has permission to export
        if (
            !is_admin() ||
            !is_user_logged_in() ||
            !$current_user_can_get_nf_submissions
        ) {

            return false;
        }

        if (!isset ($_REQUEST['form_id']) || empty ($_REQUEST['form_id'])) {
            return false;
        }

        if (isset ($_REQUEST['export_single']) && !empty($_REQUEST['export_single'])) {
            Ninja_Forms()->sub(esc_html($_REQUEST['export_single']))->export();
        }

        if ((isset ($_REQUEST['action']) && $_REQUEST['action'] == 'export') || (isset ($_REQUEST['action2']) && $_REQUEST['action2'] == 'export')) {

            $sub_ids = array();
            if (isset($_REQUEST['post'])) {
              $sub_ids = WPN_Helper::esc_html($_REQUEST['post']);
            }

            Ninja_Forms()->form( absint( $_REQUEST['form_id'] ) )->export_subs( $sub_ids );
        }

        if (isset ($_REQUEST['download_file']) && !empty($_REQUEST['download_file'])) {

            // Open our download all file
            $filename = esc_html($_REQUEST['download_file']);

            $upload_dir = wp_upload_dir();

            $file_path = trailingslashit($upload_dir['path']) . $filename . '.csv';

            if (file_exists($file_path)) {
                $myfile = file_get_contents($file_path);
            } else {
                $redirect = esc_url_raw(remove_query_arg(array('download_file', 'download_all')));
                wp_redirect($redirect);
                die();
            }

            unlink($file_path);

            $form_name = Ninja_Forms()->form(absint($_REQUEST['form_id']))->get()->get_setting('title');
            $form_name = sanitize_title($form_name);

            $today = date('Y-m-d', current_time('timestamp'));

            $filename = apply_filters('ninja_forms_download_all_filename', $form_name . '-all-subs-' . $today);

            header('Content-type: application/csv');
            header('Content-Disposition: attachment; filename="' . $filename . '.csv"');
            header('Pragma: no-cache');
            header('Expires: 0');

            echo $myfile;

            die();
        }
    }

    public function hide_page_title_action()
    {
        // If we are on our the nf_sub post type then....
        if( ( isset( $_GET[ 'post_type' ] ) && 'nf_sub' == $_GET[ 'post_type'] ) ||
            'nf_sub' == get_post_type() ) {
            // ...then hiding the "Add New" button on the CPT page.
            echo '<style type="text/css">.page-title-action, .view-mode{display: none;}</style>';
        }
    }

    /**
     * Custom Columns: ID
     *
     * @param $sub
     * @return mixed
     */
    private function custom_columns_seq_num( $sub )
    {
        return $sub->get_seq_num();
    }

    /**
     * Custom Columns: Submission Date
     *
     * @param $sub
     * @return mixed
     */
    private function custom_columns_sub_date( $sub )
    {
        // Grab the date and time format options
        $date_format = get_option( 'date_format' );
        $time_format = get_option( 'time_format' );

        // Get the sub dates using the date and time formats.
        return $sub->get_sub_date( $date_format . ' ' . $time_format );
    }

    /**
     * Custom Columns: Field
     *
     * @param $sub
     * @param $column
     * @return bool
     */
    private function custom_columns_field( $sub, $column )
    {
        if( FALSE === strpos( $column, 'field_' ) ) return FALSE;

        $field_id = str_replace( 'field_', '', $column );

        return $sub->get_field_value( $field_id );
    }

    private function table_filter_by_form( $vars, $form_id )
    {
        if ( ! isset ( $vars['meta_query'] ) ) {
            $vars['meta_query'] = array(
                array(
                    'key' => '_form_id',
                    'value' => $form_id,
                    'compare' => '=',
                ),
            );
        }

        return $vars;
    }

    private function table_filter_by_date( $vars )
    {
        if( empty( $_GET[ 'begin_date' ] ) || empty( $_GET[ 'end_date' ] ) ) return $vars;

        $begin_date = WPN_Helper::sanitize_text_field($_GET[ 'begin_date' ]);
        $end_date = WPN_Helper::sanitize_text_field($_GET[ 'end_date' ]);

        // Include submissions on the end_date.
        $end_date = date( 'm/d/Y', strtotime( '+1 day', strtotime( $end_date ) ) );

        if ( ! isset ( $vars['date_query'] ) ) {

            $vars['date_query'] = array(
                'after' => $begin_date,
                'before' => $end_date,
                'inclusive' => true,
            );
        }

        return $vars;
    }

    public function enqueue_legacy_scripts()
    {
        // let's check and make sure we're on the submissions page.
		$test = strpos( $_SERVER[ 'REQUEST_URI' ], '/wp-admin/edit.php' );
		if( isset( $_GET[ 'post_type' ] ) && 'nf_sub' == $_GET[ 'post_type' ]
			&& -1 < strpos( $_SERVER[ 'REQUEST_URI' ], '/wp-admin/edit.php' )
	    ) {
			wp_enqueue_style( 'nf-admin-settings', Ninja_Forms::$url . 'assets/css/admin-settings.css', ['wp-components'] );

			wp_register_script( 'ninja_forms_admin_submissions',
				Ninja_Forms::$url . 'assets/js/admin-submissions.js', array( 'jquery' ), false, true );

            wp_enqueue_script( 'ninja_forms_admin_submissions' );

            global $wp_version;
            //Enqueue Submissions page components
            if( $wp_version >= "5.4" ){
                //Get Dependencies and Version from build asset.php generated by wp-scripts
                $submissions_asset_php = [
                    "dependencies" => ['jquery'],
                    "version"   => false
                ];
                if( file_exists( Ninja_Forms::$dir . "build/submissions.asset.php" ) ){
                    $asset_php = include( Ninja_Forms::$dir . "build/submissions.asset.php" );
                    $submissions_asset_php["dependencies"] = array_merge( $submissions_asset_php["dependencies"], $asset_php["dependencies"]);
                    $submissions_asset_php["version"] = $asset_php["version"];
                }
                //Register Submission script
                wp_register_script( 'ninja_forms_admin_submissions_actions',
                    Ninja_Forms::$url . 'build/submissions.js',  $submissions_asset_php["dependencies"], $submissions_asset_php["version"], false );

                wp_enqueue_script( 'ninja_forms_admin_submissions_actions' );
                wp_set_script_translations( "ninja_forms_admin_submissions_actions", "ninja-forms", plugin_dir_path( __FILE__ ) . 'lang' );

                //Get all forms, to base form selector on.
                $forms = Ninja_Forms()->form()->get_forms();
                if (!empty($forms)) {
                    foreach ($forms as $form) {
                        $actions = Ninja_Forms()->form( $form->get_id() )->get_actions();
                        $form_email_actions = [];
                        foreach( $actions as $action ){
                            // If the action is set.
                            if ( ! is_null( $action ) && ! empty( $action ) ) {
                                if($action->get_settings('type') === 'email'){
                                    $form_email_actions[$action->get_id()] = $action->get_settings();
                                }

                            }
                        }
                        if( !empty($form_email_actions) ){
                            $forms[$form->get_id()] = [
                                'formID' => absint($form->get_id()),
                                'formTitle' => esc_textarea( $form->get_setting( 'title' ) ),
                                'emailActions'   => $form_email_actions
                            ];
                        }
                    }
                }
                wp_localize_script('ninja_forms_admin_submissions_actions', 'nf_submissions', [
                    'forms'         =>  $forms,//array keys escaped above
                    'dateFormat'    =>  esc_attr( Ninja_Forms()->get_setting('date_format') ),
                    'timeFormat'    =>  esc_attr( get_option('time_format') ),
                    'siteUrl'       =>  esc_url_raw( site_url() ),
                    'adminUrl'      =>  esc_url_raw( admin_url() ),
                    'restUrl'       =>  esc_url_raw( get_rest_url() ),
                    'token'         =>  wp_create_nonce( 'wp_rest' )
                ]);

                //Date Picker CSS
                wp_enqueue_style( 'nf-submissions-flatpickr', Ninja_Forms::$url . 'assets/css/flatpickr.css' );
            }

		}
    }

    public function get_page_title()
    {
        return esc_html__( 'Submissions', 'ninja-forms' );
    }

    /**
     * Display
     */
    public function display()
    {
        if ( ! $this->load_legacy ) {
            echo '<div id="nf-submissions-element"></div>';
        }
    }

    public function body_class( $classes )
    {
        // Add class for the builder.
        if( isset( $_GET['page'] ) && $_GET['page'] == $this->menu_slug ) {
            $classes = "$classes ninja-forms-submissions";
        }

        return $classes;
    }

	/**
	 * enqueue scripts here
	 */
	public function enqueue_scripts( $page ) {
		// let's check and make sure we're on the submissions page.
		if( isset( $page ) && substr( $page, -strlen( "_page_nf-submissions" ) ) === "_page_nf-submissions") {

			wp_enqueue_style( 'nf-admin-settings', Ninja_Forms::$url . 'assets/css/admin-settings.css', ['wp-components'] );
			wp_register_script( 'ninja_forms_admin_submissions', Ninja_Forms::$url . 'assets/js/admin-submissions.js', array( 'jquery' ), false, true );
            wp_enqueue_script( 'ninja_forms_admin_submissions' );

            global $wp_version;
            //Enqueue Submissions page components
            if( $wp_version >= "5.4" ){

                //Get Dependencies and Version from build asset.php generated by wp-scripts
                $submissions_asset_php = [
                    "dependencies" => ['jquery'],
                    "version"   => false
                ];
                if( file_exists( Ninja_Forms::$dir . "build/submissions.asset.php" ) ){
                    $asset_php = include( Ninja_Forms::$dir . "build/submissions.asset.php" );
                    $submissions_asset_php["dependencies"] = array_merge( $submissions_asset_php["dependencies"], $asset_php["dependencies"]);
                    $submissions_asset_php["version"] = $asset_php["version"];
                }

                //Get JS Submissions assets details
                if( file_exists( Ninja_Forms::$dir . "build/submissions.scss.asset.php" ) ){
                    $asset_scss = include( Ninja_Forms::$dir . "build/submissions.scss.asset.php" );
                }
                $submissions_asset_scss_version = isset($asset_scss) ? $asset_scss["version"] : Ninja_Forms::VERSION;

                //Register Submission script
                wp_register_script( 'ninja_forms_admin_submissions_actions', Ninja_Forms::$url . 'build/submissions.js',  $submissions_asset_php["dependencies"], $submissions_asset_php["version"], false );
                wp_enqueue_script( 'ninja_forms_admin_submissions_actions' );
                wp_set_script_translations( "ninja_forms_admin_submissions_actions", "ninja-forms", plugin_dir_path( __FILE__ ) . 'lang' );
                //Enqueue Submissions style
                wp_enqueue_style( 'ninja_forms_admin_submissions_style', Ninja_Forms::$url . 'build/submissions.scss.css',  [], $submissions_asset_scss_version );

                //Get all forms, to base form selector on.
                $forms = Ninja_Forms()->form()->get_forms();
                if (!empty($forms)) {
                    foreach ($forms as $form) {
                        $actions = Ninja_Forms()->form( $form->get_id() )->get_actions();

                        $form_email_actions = [];

                        foreach( $actions as $action ){
                            // If the action is set.
                            if ( ! is_null( $action ) && ! empty( $action ) ) {
                                if($action->get_settings('type') === 'email'){
                                    $form_email_actions[$action->get_id()] = $action->get_settings();
                                }

                            }
                        }

                        // Remove conditional, previously only added keyed data if $form_email_actions not empty
                        // Issue 6066
                        $forms[$form->get_id()] = [
                            'formID' => absint($form->get_id()),
                            'formTitle' => esc_textarea($form->get_setting('title')),
                            'emailActions'   => $form_email_actions
                        ];

                    }
                }
                $date_format = !empty( Ninja_Forms()->get_setting('date_format') ) ? Ninja_Forms()->get_setting('date_format') : get_option('date_format');
                $localized_data_array = apply_filters("ninja_forms_submissions_view_localize_data", [
                    'forms'                 =>  $forms,//array keys escaped above
                    'dateFormat'            =>  esc_attr( $date_format ),
                    'timeFormat'            =>  esc_attr( get_option('time_format') ),
                    'siteUrl'               =>  esc_url_raw( site_url() ),
                    'adminUrl'              =>  esc_url_raw( admin_url() ),
                    'pluginsUrl'            =>  esc_url_raw( plugins_url() ),
                    'restUrl'               =>  esc_url_raw( get_rest_url() ),
                    'token'                 =>  wp_create_nonce( 'wp_rest' ),
                    'submissionsSettings'   =>  get_option( 'ninja_forms_submissions_settings' )
                ]);

                wp_localize_script('ninja_forms_admin_submissions_actions', 'nf_submissions', $localized_data_array);
                

                //Date Picker CSS
                wp_enqueue_style( 'nf-submissions-flatpickr', Ninja_Forms::$url . 'assets/css/flatpickr.css' );
            }

		}
	}

    /*
     * PRIVATE METHODS
     */

    public function get_capability()
    {
        return apply_filters( 'ninja_forms_admin_submissions_capabilities', $this->capability );
    }

}
