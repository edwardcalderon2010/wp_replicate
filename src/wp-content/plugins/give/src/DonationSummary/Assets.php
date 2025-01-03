<?php

namespace Give\DonationSummary;

/**
 * @since 2.17.0
 */
class Assets
{

    /**
     * @since 2.17.0
     */
    public function loadFrontendAssets()
    {
        // WEB-2: Disabling unnecessary CSS load from home page
        if ( ! is_front_page() ) {
            wp_enqueue_style(
                'give-donation-summary-style-frontend',
                GIVE_PLUGIN_URL . 'assets/dist/css/give-donation-summary.css',
                [],
                GIVE_VERSION
            );
        }

        // WEB-2: Enabling JS to be loaded in footer with defer
        wp_enqueue_script(
            'give-donation-summary-script-frontend',
            GIVE_PLUGIN_URL . 'assets/dist/js/give-donation-summary.js',
            ['wp-i18n'],
            GIVE_VERSION,
            array( 'in_footer' => 'true', 'strategy' => 'defer' )
        );

        wp_localize_script(
            'give-donation-summary-script-frontend',
            'GiveDonationSummaryData',
            [
                'currencyPrecisionLookup' => array_map(function ($currency) {
                    return $currency['setting']['number_decimals'];
                }, give_get_currencies_list()),
                'recurringLabelLookup' => function_exists('give_recurring_get_default_pretty_periods')
                    ? give_recurring_get_default_pretty_periods()
                    : [],
            ]
        );
    }
}
