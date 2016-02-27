var gulp = require('gulp')
var gutil = require('gulp-util')
var webpack = require('webpack')
var path = require('path')
var webpackDevConf = require('../../config/webpack.dev.conf.js')
var webpackProdConf = require('../../config/webpack.prod.conf.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var viewName = 'm_order'

gulp.task('dev', function(cb) {
  var wpConfig = webpackProdConf.getConfig(__dirname, viewName, 'dev')
  runWebpack(wpConfig, cb);
})

gulp.task('build', function(cb) {
  var wpConfig = webpackProdConf.getConfig(__dirname, viewName, 'prod')
  runWebpack(wpConfig, cb);
})


function runWebpack(config, cb) {
  webpack(config, function(err, stats) {
    if (err) throw new gutil.PluginError('build', err)
    gutil.log('[build]', stats.toString({
      colors: true
    }))
    cb()
  })
}