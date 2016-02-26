var gulp = require('gulp')
var gutil = require('gulp-util')
var webpack = require('webpack')
var path = require('path')
var webpackDevConf = require('../../config/webpack.dev.conf.js')
var webpackProdConf = require('../../config/webpack.prod.conf.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var viewName = 'm_order'

// gulp.task('webpack-dev', function (cb) {
//   var myConfig = Object.create(webpackDevConf)
//
//   myConfig.entry.app = path.resolve(__dirname, './main.js')
//
//   myConfig.plugins = (config.plugins || []).concat([
//     new HtmlWebpackPlugin({
//       filename: '../index.html',
//       template: path.resolve(__dirname, './index.html'),
//       chunks: ['app']
//     })
//   ])
//
//   webpack(myConfig, function (err, stats) {
//     if (err) throw new gutil.PluginError('build', err)
//     gutil.log('[build]', stats.toString({
//       colors: true
//     }))
//     cb()
//   })
// })

gulp.task('webpack-prod', function (cb) {
  var myConfig = Object.create(webpackProdConf)

  myConfig.entry[viewName] = path.resolve(__dirname, './main.js')

  myConfig.output.path += '/' + viewName + '/'
  myConfig.output.publicPath += '/' + viewName + '/'

  myConfig.plugins = (myConfig.plugins || []).concat([
    new HtmlWebpackPlugin({
      filename: 'html/index.html',
      template: path.resolve(__dirname, './index.html'),
      chunks: [viewName]
    }),
    new HtmlWebpackPlugin({
      filename: '../../../sinclude/wp/' + viewName + '/cssi.html',
      template: path.resolve(__dirname, './cssi.html'),
      chunks: [viewName]
    }),
    new HtmlWebpackPlugin({
      filename: '../../../sinclude/wp/' + viewName + '/jsi.html',
      template: path.resolve(__dirname, './jsi.html'),
      chunks: [viewName]
    })
  ])

  webpack(myConfig, function (err, stats) {
    if (err) throw new gutil.PluginError('build', err)
    gutil.log('[build]', stats.toString({
      colors: true
    }))
    cb()
  })
})

gulp.task('build', function () {
  gulp.start('webpack-prod')
})
