'use strict'

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.development')

const client = 'localhost'
const webpackDevServerPort = 8080
const backendPort = 3000

config.entry.unshift(
  `webpack-dev-server/client?http://${client}:${webpackDevServerPort}`,
  'webpack/hot/only-dev-server'
)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  proxy: {
    '*': `http://${client}:${backendPort}`
  }
})
server.listen(webpackDevServerPort, () => {
  /* eslint-disable no-console */
  console.log(`Webpack Dev Server Listen At: ${webpackDevServerPort}`)
  /* eslint-enable no-console */
})
