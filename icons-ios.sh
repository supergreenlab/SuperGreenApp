#!/bin/bash

for i in `ls $1`; do echo "<icon src=\"$1/$i\" width=\"`identify -format '%w' $1/$i`\" height=\"`identify -format '%h' $1/$i`\"/>"; done
