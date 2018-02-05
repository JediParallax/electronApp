const electron = require('electron')
// import electron from 'node_modules/electron'
const {app, BrowserWindow} = electron

const path = require('path')
const url = require('url')

let win;

function createWindow(){
    win = new BrowserWindow ({width: 800, height: 500})
    win.loadURL(url.format({
        pathname:path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))
}

app.on('ready', createWindow)
exports.openWindow = (fileName) => {
    win = new BrowserWindow ({width: 800, height: 500})
    win.loadURL(url.format({
        pathname:path.join(__dirname, fileName),
        protocol: 'file',
        slashes: true
    }))
}
 


