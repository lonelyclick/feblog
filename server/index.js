'use strict'

const koa = require('koa')
const logger = require('koa-logger')
const route = require('koa-route')
const mock = require('mockjs')
const fs = require('fs')
const path = require('path')
const staticCache = require('koa-static-cache')
const mount = require('koa-mount')
const request = require('koa-request')
const Random = mock.Random
const app = koa()

const page = require('./page_prod/Home')

let backendPort = 3000
let deploy = 'dev'

if (process.argv.indexOf('--mock-build') !== -1) {
  deploy = 'build'
  backendPort = 3001
}

app.use(logger())

app.use(route.get('/', function* () {
  this.body = page()
}))

console.log();

app.use(mount('/assets', staticCache(path.resolve(__dirname, '../dev/assets'))))

// app.use(route.get('*', function* () {
//   this.type = 'html'
//   this.body = yield function (done) {
//     fs.readFile(`${deploy}/index.html`, 'utf8', done)
//   }
// }))

app.listen(backendPort, () => {
  /* eslint-disable no-console */
  console.log(`Backend Koa Server Listen At: ${backendPort}`)
  /* eslint-enable no-console */
})
