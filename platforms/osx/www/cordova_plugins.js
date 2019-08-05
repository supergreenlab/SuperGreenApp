cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-ble-central.ble",
      "file": "plugins/cordova-plugin-ble-central/www/ble.js",
      "pluginId": "cordova-plugin-ble-central",
      "clobbers": [
        "ble"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-add-swift-support": "2.0.1",
    "cordova-plugin-zeroconf": "1.4.0",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-ble-central": "1.2.2"
  };
});