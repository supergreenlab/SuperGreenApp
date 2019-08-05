cordova.define('cordova/plugin_list', function (require, exports, module) {
            module.exports = [
    {
        "file": "plugins/cordova-plugin-ble-central/www/ble.js",
        "id": "cordova-plugin-ble-central.ble",
        "pluginId": "cordova-plugin-ble-central",
        "clobbers": [
            "ble"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ble-central/src/browser/BLECentralPlugin.js",
        "id": "cordova-plugin-ble-central.BLECentralPlugin",
        "pluginId": "cordova-plugin-ble-central",
        "merges": [
            "ble"
        ]
    }
];

            module.exports.metadata =
            // TOP OF METADATA
            {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-add-swift-support": "2.0.1",
    "cordova-plugin-zeroconf": "1.4.0",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-ble-central": "1.2.2"
}
            // BOTTOM OF METADATA
        });