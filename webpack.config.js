'use strict'

const path = require('path')

const deployLocation = 'dev'

module.exports = [{
  entry:
  {
    Home: './page/Home.jsx'
  },
  colors: true,
  resolve: {
    extensions: ['', '.js', '.jsx', '.local']
  },
  color: true,
  progress: true,
  output: {
    filename: 'assets/[name].js',
    path: path.join(__dirname, deployLocation),
    publicPath: '/',
    sourceMapFilename: '/[file].map'
  },
  devtool: '#cheap-source-map',
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: [
        'react-hot',
        'babel?stage=0'
      ]
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'file?name=assets/[name].[ext]'
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    },
    {
      test: /\.css$/,
      include: /node_modules/,
      loader: 'style-loader!css-loader'
    }]
  },
  postcss: [
    require('stylelint'),
    require('autoprefixer'),
    require('postcss-color-rebeccapurple'),
    require('precss'),
    require('postcss-color-function'),
    require('postcss-reporter')
  ],
  plugins: [],
  eslint: {
    configFile: '.eslintrc',
    plugins: [
      'react'
    ]
  }
}, {
  resolve: {
    extensions: ['', '.js', '.jsx', '.local']
  },
  entry: './server/page/Home.jsx',
  target: 'node',
  output: {
    path: 'server/page_prod',
    filename: 'Home.js',
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  externals: /^[a-z\-0-9]+$/,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: [
        'babel?stage=0'
      ]
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'css-loader/locals?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    },
    {
      test: /\.css$/,
      include: /node_modules/,
      loader: 'css-loader/locals'
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'file?name=assets/[name].[ext]'
    }]
  }
}]
