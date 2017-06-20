const {app, BrowserWindow} = require('electron')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('config.json'))

let win

function createWindow () {

  app.server = require(__dirname + '/app/app')()

  win = new BrowserWindow()
  win.maximize()

  win.loadURL(`http://${config.server.host}:${config.server.port}`)

  win.focus();

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})