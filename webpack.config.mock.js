'use strict'

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.local']
  },
	name: "server-side rendering",
	entry: "./server/page/Home.jsx",
	target: "node",
	output: {
		path: 'server/page_prod',
		filename: "Home.js",
		publicPath: '/',
		libraryTarget: "commonjs2"
	},
	externals: /^[a-z\-0-9]+$/,
	module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: [
          'babel?stage=0'
        ]
      },
      { test: /\.local$/, exclude: /node_modules/, loader: 'css-loader/locals?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'null-loader' }
    ]
	}
}
