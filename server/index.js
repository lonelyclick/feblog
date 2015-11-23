const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV || 'development'

const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server, { 'log level': 0 })
const deployd = require('deployd')

const page = require('./page_prod/Home')

deployd.attach(server, {
  socketIo: io,
  env: ENV,
  db: {
    host: 'localhost',
    port: 27017,
    name: 'dpd'
  }
})

app.use('/assets', express.static(path.resolve(__dirname, '../dev/assets')))

app.get('/', (req, res) => {
  res.send(page())
})


app.use(server.handleRequest)

server.listen(PORT)
