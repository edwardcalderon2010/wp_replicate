#!/bin/bash
echo "################";
echo "Name: $(whoami)";
echo "Groups: $(groups)";
date;
free -mlh;
ps -eo user,rss,vsz,%mem,pid,args;
cat /proc/meminfo;
ls -altr /proc/ ;
echo "##### Process 1 Status";
cat /proc/1/status;
echo "##### Process 2 Status";
cat /proc/2/status;
echo "##### Process 3 Status";
cat /proc/3/status;
top -bn 1

