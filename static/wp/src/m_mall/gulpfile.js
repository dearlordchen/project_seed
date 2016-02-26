var gulp = require('gulp')
var gutil = require('gulp-util')
var webpack = require('webpack')
var path = require('path')
var webpackDevConf = require('../../config/webpack.dev.conf.js')
var webpackProdConf = require('../../config/webpack.prod.conf.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')

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

  myConfig.entry.app = path.resolve(__dirname, './main.js')

  myConfig.plugins = (myConfig.plugins || []).concat([
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: path.resolve(__dirname, './index.html'),
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: '../cssi.html',
      template: path.resolve(__dirname, './cssi.html'),
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: '../jsi.html',
      template: path.resolve(__dirname, './jsi.html'),
      chunks: ['app']
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
