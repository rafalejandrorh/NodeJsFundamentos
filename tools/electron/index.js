// Para instalar: npm i electron
// Aplicacion de escritorio

const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', createWindow);

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 600
    })

    mainWindow.loadFile('index.html');
}