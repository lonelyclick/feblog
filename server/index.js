'use strict'

const koa = require('koa')
const logger = require('koa-logger')
const route = require('koa-route')
const path = require('path')
const staticCache = require('koa-static-cache')
const mount = require('koa-mount')
const app = koa()

const page = require('./page_prod/Home')

const backendPort = 3000

app.use(logger())

app.use(route.get('/', function* () {
  this.body = page()
}))

app.use(mount('/assets', staticCache(path.resolve(__dirname, '../dev/assets'))))

app.listen(backendPort, () => {
  /* eslint-disable no-console */
  console.log(`Backend Koa Server Listen At: ${backendPort}`)
  /* eslint-enable no-console */
})
