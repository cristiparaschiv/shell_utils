#!/bin/sh

# Convert TIMESTAMP argument to GMT date format
TIMESTAMP=$1
DATE=`TZ="GMT" date -d @$TIMESTAMP`
echo $DATE
