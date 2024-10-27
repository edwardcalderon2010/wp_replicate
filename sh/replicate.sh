#!/bin/bash

home_dir="${DEVOPS_HOME}/wp_replicate/";

devops_home="";

in_dir="in/";
out_dir="out/";
sql_dir="${in_dir}sql/"
config_dir="${in_dir}config/";
template_dir="${in_dir}template/";
archive_dir="archives/";

default_config_file="${config_dir}config1.txt";

db_name="";
db_user="";
db_pwd="";
db_import_sql="";
wp_dir="";
wp_as_subdirectory="";
wp_root="";
wp_template="";
wp_admin_email="";
super_user="";
web_domain="";
wp_http_protocol="";
readonly_flag="";

wp_base_url="";

temp_wp_htaccess="${home_dir}${out_dir}temp_htaccess.txt";

fixsql() {

    tgt_http_base="http://localhost";
    # Transform/update db name refs
    sed -i 's/empower_autism/empower2_autism/g' $db_import_sql;
    
    # transform/update any 'localhost' references into live site refs
	sed -i "s#${tgt_http_base}\(:[0-9]\{4\}\)*#${empower_http_url}/$wp_dir#g" $db_import_sql;
	
    # transform/update any 'http' references into 'https' refs
	sed -i "s#${empower_http_url}#${empower_https_url}#g" $db_import_sql;
}

init() {
    cd $home_dir;
    echo "reading $default_config_file";
    ls -altr $default_config_file;
    ls -altr ${sql_dir}delete_ninja_forms_maria.sql;
    config_args=(`cat $default_config_file`);
    key="";
    value="";
    for config in "${config_args[@]}"
    do
        key=`echo $config | awk -F ":" '{print $1}' `;
        value=`echo $config | awk -F ":" '{print $2}' `;
        if [ $key = "DB_NAME" ]; then
            db_name=$value;
        elif [ $key = "DB_USER" ]; then
            db_user=$value;
        elif [ $key = "DB_PWD" ]; then
            db_pwd=$value;
        elif [ $key = "DB_IMPORT_SQL" ]; then
            db_import_sql="${home_dir}${archive_dir}${value}";
        elif [ $key = "WP_INSTANCE" ]; then
            wp_dir=$value;
        elif [ $key = "WP_AS_SUBDIRECTORY" ]; then
            wp_as_subdirectory=$value;
        elif [ $key = "WP_TEMPLATE" ]; then
            wp_template="${home_dir}${archive_dir}$value";
        elif [ $key = "WP_ROOT" ]; then
            wp_root=$value;
        elif [ $key = "WP_ADMIN_EMAIL" ]; then
            wp_admin_email=$value;
        elif [ $key = "WEB_DOMAIN" ]; then
            web_domain=$value;
        elif [ $key = "WP_HTTP_PROTOCOL" ]; then
            wp_http_protocol=$value;
        elif [ $key = "SUPER_USER" ]; then
            super_user=$value;
        elif [ $key = "READONLY" ]; then
            readonly_flag=$value;
        fi
    done
  
    ls -altr $db_import_sql;
    
    wp_base_url="${wp_http_protocol}://${web_domain}";
    
    if [ "$wp_as_subdirectory" = "true" ]; then
        wp_base_url="${wp_base_url}/${wp_dir}";
    fi
    
    echo "Target domain: $wp_base_url";
    echo "Target DB: ${db_name};${db_user}";
    echo "Target wp_install: ${wp_root}${wp_dir}";
    echo "Target wp_template: ${wp_template}";
    
    generate_htaccess;
    
    # Write protection is enabled via the readonly_flag.
    # This must be manually configured to 'false' prior to successful execution of this script.
    # When applying a reset automatically set this flag back to 'true'. 
    if [ $readonly_flag = "false" ]; then
        sed -i 's/^\(READONLY:\)\w\+/\1true/g' $default_config_file;
    fi
}

generate_htaccess() {
    # Clear any existing temp htaccess file
    echo "" > $temp_wp_htaccess;
    
    if [ "$wp_http_protocol" = "https" ]; then
        cat "$config_dir/htaccess_https_snippet.txt" >> $temp_wp_htaccess;
    fi
    cat "$config_dir/htaccess.txt" >> $temp_wp_htaccess;
    
    subdir_replace="";
    if [ "$wp_as_subdirectory" = "true" ]; then
        subdir_replace="\/$wp_dir";
    fi
    
    sed -i "s/#SUBDIR#/${subdir_replace}/g" $temp_wp_htaccess;
}

reset_db() {

	echo "Executing DB Tasks";
	echo "## 1/5 Dropping Database $db_name";
	mysql --defaults-file=$MYSQL_OPTS -u $db_user -e "drop database $db_name;";

	echo "## 2/5 Importing Database $db_name";
	mysql --defaults-file=$MYSQL_OPTS -u $db_user < $db_import_sql;

	echo "## 3/5 Change admin emails";
	mysql --defaults-file=$MYSQL_OPTS -u $db_user --database "$db_name" -e "select user_login, user_email from wp_users;";
	mysql --defaults-file=$MYSQL_OPTS -u $db_user --database "$db_name" -e "update wp_users set user_email='$wp_admin_email';";
	mysql --defaults-file=$MYSQL_OPTS -u $db_user --database "$db_name" -e "select user_login, user_email from wp_users;";

	mysql --defaults-file=$MYSQL_OPTS -u $db_user --database "$db_name" -e "select option_value from wp_options where option_name='admin_email';";
	mysql --defaults-file=$MYSQL_OPTS -u $db_user --database "$db_name" -e "update wp_options set option_value='$wp_admin_email' where option_name='admin_email';";
	mysql --defaults-file=$MYSQL_OPTS -u $db_user --database "$db_name" -e "select option_value from wp_options where option_name='admin_email';";

	echo "## 4/5 Deleting Ninja Forms Data";
	mysql --defaults-file=$MYSQL_OPTS -u $db_user --database "$db_name" -e "select count(*) from wp_postmeta;";
#	mysql --defaults-file=$MYSQL_OPTS -u $db_user --database "$db_name" < ${sql_dir}delete_ninja_forms_maria.sql;
	mysql --defaults-file=$MYSQL_OPTS -u $db_user --database "$db_name" < ${sql_dir}delete_ninja_forms_by_formid.sql;
	mysql --defaults-file=$MYSQL_OPTS -u $db_user --database "$db_name" -e "select count(*) from wp_postmeta;";
	
	
	
	echo "## 5/5 Update Home/Site URLs";
	mysql --defaults-file=$MYSQL_OPTS -u $db_user --database "$db_name" -e "update wp_options set option_value = '${wp_base_url}' where option_name in ('home','siteurl');"
	mysql --defaults-file=$MYSQL_OPTS -u $db_user --database "$db_name" -e "select option_name,option_value from wp_options where option_name in ('home','siteurl');";
}

reset_wp_dir() {
    
    sudo_cmd="";
    if [ "$super_user" = "true" ]; then
        sudo_cmd="sudo";
    fi
    
	echo "Executing wp re-deploy Tasks";

	echo "1/10 Changing dir $wp_root";
	cd $wp_root;
	
	# Remove current wp_dir
	echo "2/10 Deleting existing wp_dir $wp_dir";
	"$sudo_cmd" rm -rf "$wp_dir"/
	
	# Extract template instance
	echo "3/10 Extracting WP template archive $wp_template";
	"$sudo_cmd" tar -xzf "$wp_template";
	
	# Rename extracted template
	echo "4/10 Rename wp dir $wp_dir";
	"$sudo_cmd" mv empower_autism "$wp_dir";
	
	# Remove/replace old .htaccess
	echo "5/10 Remove old .htaccess";
	"$sudo_cmd" rm -rf "$wp_dir"/.htaccess
	"$sudo_cmd" cp $temp_wp_htaccess "$wp_dir"/.htaccess

	# Set permissions
	echo "6/10 Set owner, group, access to $wp_dir";
    if [ "$super_user" = "true" ]; then
        "$sudo_cmd" chown -R www-data "$wp_dir"/
        "$sudo_cmd" chgrp -R admin "$wp_dir"/
    fi
	"$sudo_cmd" chmod -R 755 "$wp_dir"/
	
	# Reconfigure wp-config
	echo "7/10 Reconfigure $wp_dir/wp-config.php";
	"$sudo_cmd" sed -i "s/\(^define(\s\+\o47DB_NAME\o47\o54\s\+\o47\).*\(\o47\)/\1$db_name\2/g" "$wp_dir"/wp-config.php
	"$sudo_cmd" sed -i "s/\(^define(\s\+\o47DB_USER\o47\o54\s\+\o47\).*\(\o47\)/\1$db_user\2/g" "$wp_dir"/wp-config.php
	"$sudo_cmd" sed -i "s/\(^define(\s\+\o47DB_PASSWORD\o47\o54\s\+\o47\).*\(\o47\)/\1$db_pwd\2/g" "$wp_dir"/wp-config.php
	
	# Check Results
	grep "DB_NAME" "$wp_dir"/wp-config.php;
	grep "DB_USER" "$wp_dir"/wp-config.php;
	ls -altr "$wp_dir"
	cat "${wp_dir}/.htaccess"
}

tidy() {
    rm -rf $temp_wp_htaccess;
}

main() {
    echo "Started: $(date)";
    echo "Home dir: ${home_dir}";
    
    error_msg="";

    if [ "$DEVOPS_HOME" = "" ]; then
        error_msg="DEVOPS_HOME is not set";
    elif [ ! -d "$DEVOPS_HOME" ]; then
        error_msg="DEVOPS_HOME does not exist";
    elif [ "$MYSQL_OPTS" = "" ]; then
        error_msg="MYSQL_OPTS is not set";
    elif [ ! -f "$MYSQL_OPTS" ]; then
        error_msg="MYSQL_OPTS does not exist";
    fi
    
    if [ "$error_msg" != "" ]; then
        echo "ERROR: $error_msg; exiting.";
    else
        cd $home_dir;
        init;
        #fixsql;
        
        if [ $readonly_flag = "false" ]; then
            echo "Applying Reset";
            reset_db;
            reset_wp_dir
        else
            echo "Write protection enabled; disable readonly flag to apply reset.";
        fi
        
        tidy;
        
        echo "Done";
    fi
        
}


main;
