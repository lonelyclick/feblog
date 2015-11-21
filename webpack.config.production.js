'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackConfig = require('./webpack.config.base')

const cssPath = '/assets/app.[hash].css'
const deployLocation = 'build'

Object.assign(webpackConfig, {
  output: {
    filename: '/assets/index.[hash].js',
    path: path.join(__dirname, deployLocation)
  }
})

webpackConfig.module.loaders.push(
  {
    test: /\.css$/,
    /* eslint-disable max-len */
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
    /* eslint-enable max-len */
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
  }
)

webpackConfig.plugins.push(
  new ExtractTextPlugin(cssPath),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })
)

module.exports = webpackConfig
