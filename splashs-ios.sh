#!/bin/bash

for i in `ls $1`; do echo "<splash src=\"$1/$i\" />"; done
