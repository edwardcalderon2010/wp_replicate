#!/bin/bash
home_dir="${DEVOPS_HOME}/wp_replicate/";
in_dir="in/";
out_dir="out/";
config_dir="${in_dir}config/";

tgt_rev="$1";
deploy_patch="$2";

default_config_file="${config_dir}config1.txt";

wp_dir="";
wp_as_subdirectory="";
wp_root="";
super_user="";
wp_tgt_php_path="";

init() {
    cd $home_dir;
    echo "reading $default_config_file";
    config_args=(`cat $default_config_file`);
    key="";
    value="";
    for config in "${config_args[@]}"
    do
        key=`echo $config | awk -F ":" '{print $1}' `;
        value=`echo $config | awk -F ":" '{print $2}' `;
        if [ $key = "WP_INSTANCE" ]; then
            wp_dir=$value;
        elif [ $key = "WP_AS_SUBDIRECTORY" ]; then
            wp_as_subdirectory=$value;
        elif [ $key = "WP_ROOT" ]; then
            wp_root=$value;
        elif [ $key = "SUPER_USER" ]; then
            super_user=$value;
        fi
    done

    wp_tgt_php_path="${wp_root}/";
    if [ ${wp_as_subdirectory} = "true" ]; then
        wp_tgt_php_path="${wp_tgt_php_path}${wp_dir}/"
    fi

}

cleanup() {
    rm -rf ${out_dir}${tgt_rev};
    rm -rf ${out_dir}${tgt_rev}.zip;
}

main() {
    echo "Started: $(date)";
    echo "Home dir: ${home_dir}";
    
    error_msg="";

    if [ "$DEVOPS_HOME" = "" ]; then
        error_msg="DEVOPS_HOME is not set";
    elif [ ! -d "$DEVOPS_HOME" ]; then
        error_msg="DEVOPS_HOME does not exist";
    elif [ "$tgt_rev" = "" ]; then
        error_msg="Target revision is not set";
    fi
    
    if [ "$error_msg" != "" ]; then
        echo "ERROR: $error_msg; exiting.";
    else
        init;
        temp_patch_dir="${out_dir}${tgt_rev}/";
        tgt_files=($(git log "$tgt_rev" -n1 --name-only | grep src | grep php | sed 's/^src\///g'));
        for tgt_file in "${tgt_files[@]}"
        do
            echo "proc: $tgt_file";
            mkdir -p "${temp_patch_dir}$(dirname $tgt_file)";
            cp src/$tgt_file "${temp_patch_dir}$(dirname $tgt_file)";
        done
        cd ${temp_patch_dir};
        zip -rq ${home_dir}${out_dir}${tgt_rev}.zip * ;
        cd ${home_dir};

        
        if [ "$deploy_patch" = "deploy" -a -d "$wp_tgt_php_path" ]; then
            echo "Deploying patch to: $wp_tgt_php_path";
            sudo_cmd="";
            if [ "$super_user" = "true" ]; then
                sudo_cmd="sudo";
            fi
            
            $sudo_cmd unzip ${out_dir}${tgt_rev}.zip -d $wp_tgt_php_path
            if [ "$super_user" = "true" ]; then
                "$sudo_cmd" chown -R www-data "$wp_tgt_php_path"/
                "$sudo_cmd" chgrp -R admin "$wp_tgt_php_path"/
            fi
            "$sudo_cmd" chmod -R 755 "$wp_tgt_php_path"/

        fi

        
        #cleanup;
    fi

}

main;