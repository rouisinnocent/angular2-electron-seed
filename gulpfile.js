var gulp = require('gulp');
var electron = require('electron-connect').server.create();

gulp.task('electron', () => {
    electron.start();
    electron.on('webpack-compiled', () => {
        console.log('[RELOADING]: rendering processes..');
        electron.reload();
    });
    gulp.watch('electron.ts', () => {
        console.log('[RESTARTING]: main process..');
        electron.restart();
    });
});