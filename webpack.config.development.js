'use strict'

const path = require('path')
const webpack = require('webpack')

const webpackConfig = require('./webpack.config.base')
const deployLocation = 'dev'

Object.assign(webpackConfig, {
  color: true,
  progress: true,
  output: {
    filename: 'assets/[name].js',
    path: path.join(__dirname, deployLocation),
    publicPath: `/${deployLocation}`,
    sourceMapFilename: '/[file].map'
  },
  devtool: '#cheap-source-map'
})

webpackConfig.module.loaders.push(
  { test: /\.local$/, loader: 'style-loader!css-loader?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader' },
    { test: /\.css$/, loader: 'style-loader!css-loader' }
)

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

if (process.argv.indexOf('--enable-eslint') !== -1) {
  webpackConfig.module.preLoaders = [
    {
      test: /\.(js|jsx)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }
  ]

  webpackConfig.eslint = {
    configFile: '.eslintrc',
    plugins: [
      'react'
    ]
  }
}

module.exports = webpackConfig
