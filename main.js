const {app, BrowserWindow} = require('electron')
const fs = require('fs')
const config = {
  server: {
    host: 'localhost',
    port: '45297'
  }
}

let win

function createWindow () {

  //app.server = require(__dirname + '/app/app')(config)

  win = new BrowserWindow()
  win.maximize()

  win.loadURL(`file://${__dirname}/app/public/index.html`)

  win.focus()

  win.setMenu(null)

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
