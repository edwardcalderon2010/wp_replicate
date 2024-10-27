#!/bin/bash

# Utility script to re-configure source database SQL for context-specific deployment

arg1=$1;
arg2=$2;

env_type="";
tgt_sql_source="empowera_asperger_new.sql";
tgt_http_base="http://localhost";


edit_source_sql() {
	
	tgt_port=$1;
	tgt_dbname=$2;
	
	echo "Editing SQL 1/2 using $tgt_port";
	sed -i "s#$tgt_http_base:[0-9]\{4\}#$tgt_http_base:$tgt_port#g" $tgt_sql_source;
	echo "Editing SQL 2/2"
	sed -i "s/\(^--\o40Database:\o40\o140\).*\(\o140\)/\1${tgt_dbname}\2/g" $tgt_sql_source;
	sed -i "s/\(^CREATE DATABASE IF NOT EXISTS\o40\o140\).*\(\o140\)/\1${tgt_dbname}\2/g" $tgt_sql_source;
	sed -i "s/\(^USE\o40\o140\).*\(\o140\)/\1${tgt_dbname}\2/g" $tgt_sql_source;
	 
}

main() {

	
	if [ "$arg1" != "" -a "$arg2" != "" ]; then
		echo "Starting";
		edit_source_sql "$arg1" "$arg2";
		echo "Done";
	else
		echo "Missing arg - exiting."
	fi

}

main;