#!/bin/bash

for i in `ls platforms/ios/SuperGreenLab/Images.xcassets/AppIcon.appiconset/*.png`; do convert $i -alpha off $i; done
