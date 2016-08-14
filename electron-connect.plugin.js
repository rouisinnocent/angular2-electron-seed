var electron = require('electron-connect').client;
var client;

function ElectronConnectPlugin(options) {
    // Setup the plugin instance with options...
}

ElectronConnectPlugin.prototype.apply = function (compiler) {
    var client;
    if (!client) {
        client = electron.create();
    }
    compiler.plugin('done', (stats) => {
        client.sendMessage('webpack-compiled');
    });
};

module.exports = ElectronConnectPlugin;