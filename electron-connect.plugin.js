var electron = require('electron-connect').client;

function ElectronConnectPlugin(options) {
    // Setup the plugin instance with options...
}

ElectronConnectPlugin.prototype.apply = function (compiler) {
    var client = electron.create();
    compiler.plugin('done', () => {
        client.sendMessage('webpack-compiled');
    });
};

module.exports = ElectronConnectPlugin;