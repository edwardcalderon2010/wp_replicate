#!/bin/bash
home_dir="${DEVOPS_HOME}/wp_replicate/";
src_dir="${home_dir}src/";
in_dir="in/";
out_dir="out/";
config_dir="${in_dir}config/";

tgt_rev="$1";

default_config_file="${config_dir}config1.txt";
tgt_php_config="${config_dir}target_php_dirs.txt";

wp_dir="";
wp_as_subdirectory="";
wp_root="";
super_user="";

wp_tgt_php_path="";

tgt_php_dirs="";

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
  
    tgt_php_dirs=($(cat $tgt_php_config));
    
    wp_tgt_php_path="${wp_root}/";
    if [ ${wp_as_subdirectory} = "true" ]; then
        wp_tgt_php_path="${wp_tgt_php_path}${wp_dir}/"
    fi
}


main() {
    echo "Started: $(date)";
    echo "Home dir: ${home_dir}";
    
    error_msg="";

    if [ "$DEVOPS_HOME" = "" ]; then
        error_msg="DEVOPS_HOME is not set";
    elif [ ! -d "$DEVOPS_HOME" ]; then
        error_msg="DEVOPS_HOME does not exist";
    fi
    
    if [ "$error_msg" != "" ]; then
        echo "ERROR: $error_msg; exiting.";
    else
        init;
        for tgt_dir in "${tgt_php_dirs[@]}"
        do
            tmp_dir="${wp_tgt_php_path}${tgt_dir}";
            if [ -d "$tmp_dir" ]; then
                echo "processing $tmp_dir";
                tgt_php_files=($(find $tmp_dir -type f -name "*.php"));
                for tgt_php_file in "${tgt_php_files[@]}"
                do
                    import_dir="${src_dir}$(dirname $tgt_php_file | sed "s!$wp_tgt_php_path!!g")";
                    if [ ! -d "$import_dir" ]; then
                        echo "creating new dir; $import_dir";
                        mkdir -p "$import_dir";
                    fi
                    cp "${tgt_php_file}" "${import_dir}";
                done
            fi
        done
    fi

}

main;