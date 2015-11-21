'use strict'

module.exports = {
  entry: {
    Home: './page/Home.jsx'
  },
  colors: true,
  resolve: {
    extensions: ['', '.js', '.jsx', '.local']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: [
          'react-hot',
          'babel?stage=0'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file?name=/assets/[name].[ext]'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=/assets/[name].[ext]'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=/assets/[name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=/assets/[name].[ext]'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=/assets/[name].[hash].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=/assets/[name].[ext]'
      }
    ]
  },
  postcss: [
    require('stylelint'),
    require('autoprefixer'),
    require('postcss-color-rebeccapurple'),
    require('precss'),
    require('postcss-color-function'),
    require('postcss-reporter')
  ],
  plugins: []
}
