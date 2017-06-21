module.exports = (config) => {
  const fs = require('fs')
  const path = require('path')
  const express = require('express')
  const app = express()

  app.use(express.static('app/public'))

  app.listen(config.server.port, (err) => {
    console.info(`Listen on port ${config.server.port}`)
  })
}
