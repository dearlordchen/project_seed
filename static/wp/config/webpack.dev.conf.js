var webpack = require('webpack')
var config = require('./webpack.base.conf')

var devConfig = Object.create(config)

// eval-source-map is faster for development
devConfig.devtool = 'eval-source-map'

// add hot-reload related code to entry chunk
// config.entry.app = [
//   'eventsource-polyfill',
//   'webpack-hot-middleware/client?quiet=true',
//   config.entry.app
// ]
// config.entry.mall = [
//   'eventsource-polyfill',
//   'webpack-hot-middleware/client?quiet=true',
//   config.entry.mall
// ]

// necessary for the html plugin to work properly
// when serving the html from in-memory
devConfig.output.publicPath = '/'

devConfig.plugins = (devConfig.plugins || []).concat([
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin
  // new HtmlWebpackPlugin({
  //   filename: '../index.html',
  //   template: 'src/index.html',
  //   chunks: ['app']
  // })
])

module.exports = devConfig
