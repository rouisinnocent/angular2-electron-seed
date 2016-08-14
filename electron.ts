/// <reference path="./typings/index.d.ts" />
import * as electron from 'electron';
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let win: Electron.BrowserWindow;

function init() {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    let winUrl = `file://${__dirname}/dist/index.html`;
    win.loadURL(winUrl);
    //win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', init);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        init();
    }
});