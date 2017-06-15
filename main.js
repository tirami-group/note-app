const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const isDevMode = (process.env.NODE_ENV === 'development')

if (isDevMode) {
  require('electron-reload')(__dirname)
}

let mainWindow

let createWindow = () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  if (isDevMode) {
    mainWindow.loadURL('http://localhost:5000')
  } else {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  }

  if (isDevMode) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => { mainWindow = null })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
