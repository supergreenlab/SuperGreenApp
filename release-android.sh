#!/bin/bash

# taken from https://github.com/dpa99c/cordova-android-support-gradle-release/issues/17#issuecomment-435692034

trap interrupted INT
function interrupted() {
  rm -f platforms/android/release.properties
}

stty -echo
read -p "Store Password: " spassw; echo
read -p "Key Password: " kpassw; echo
stty echo

cat << EOT > platforms/android/release.properties
storeFile=../../../android-keystore/release-key.keystore
storePassword=$spassw
keyAlias=sga
keyPassword=$kpassw
EOT

export ORG_GRADLE_PROJECT_cdvReleaseSigningPropertiesFile=../release.properties 
cordova build --release android -- --packageType=bundle
rm platforms/android/release.properties
