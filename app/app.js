module.exports = () => {
  const fs = require('fs')
  const path = require('path')
  const express = require('express')
  const app = express()
  const config = {
    server: {
      host: 'localhost',
      port: '3000'
    }
  }

  app.use(express.static('app/public'))

  app.listen(config.server.port, (err) => {
    console.info(`Listen on port ${config.server.port}`)
  })
}
