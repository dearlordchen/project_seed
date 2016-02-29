var gulp = require('gulp')
var gutil = require('gulp-util')
var webpack = require('webpack')
var path = require('path')
var webpackDevConf = require('../../config/webpack.dev.conf.js')
var webpackProdConf = require('../../config/webpack.prod.conf.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var sftp = require('gulp-sftp')
var myConfig = require('../../config/my-config.json')

var viewName = 'm_order'

<<<<<<< HEAD
// 上传到dev服务器
gulp.task('upload-dev', ['webpack-dev'], function () {
  return gulp.src('../../dist/' + viewName + '/**')
    .pipe(sftp({
			host: myConfig.sftp.dev.host,
      port: myConfig.sftp.dev.port,
			user: myConfig.sftp.dev.user,
			pass: myConfig.sftp.dev.pass,
      remotePath: myConfig.sftp.dev.staticRemotePath + viewName
		}))
})
gulp.task('upload-ssi-dev', ['upload-dev'], function () {
  return gulp.src('../../../sinclude/wp/' + viewName + '/**')
  .pipe(sftp({
    host: myConfig.sftp.dev.host,
    port: myConfig.sftp.dev.port,
    user: myConfig.sftp.dev.user,
    pass: myConfig.sftp.dev.pass,
    remotePath: myConfig.sftp.dev.ssiRemotePath + viewName
  }))
})

// 打包压缩
gulp.task('webpack-dev', function (cb) {
  var webpackConf = Object.create(webpackProdConf)

  webpackConf.entry[viewName] = path.resolve(__dirname, './main.js')

  webpackConf.output.path += '/' + viewName + '/'
  webpackConf.output.publicPath += '/' + viewName + '/'

  webpackConf.plugins = (webpackConf.plugins || []).concat([
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

  webpack(webpackConf, function (err, stats) {
    if (err) throw new gutil.PluginError('build', err)
    gutil.log('[build]', stats.toString({
      colors: true
    }))
    cb()
  })
})

gulp.task('webpack-prod', function (cb) {
  var webpackConf = Object.create(webpackProdConf)

  webpackConf.entry[viewName] = path.resolve(__dirname, './main.js')

  webpackConf.output.path += '/' + viewName + '/'
  webpackConf.output.publicPath += '/' + viewName + '/'

  webpackConf.plugins = (webpackConf.plugins || []).concat([
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

  webpack(webpackConf, function (err, stats) {
=======
gulp.task('watch', function(cb) {
  var wpConfig = webpackProdConf.getConfig(__dirname, viewName, 'dev')
  wpConfig.watch = true;
  runWebpack(wpConfig, cb);
})

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
>>>>>>> 44aaf7e1c75ea9e110a901626920403092ae1432
    if (err) throw new gutil.PluginError('build', err)
    console.log(stats)
    gutil.log('[build]', stats.toString({
      colors: true
    }))
    if (!config.watch) {
      cb()
    }
  })
<<<<<<< HEAD
})

gulp.task('default', ['upload-ssi-dev'], function () {
  gulp.watch('./**', ['upload-ssi-dev'])
})
=======
}
>>>>>>> 44aaf7e1c75ea9e110a901626920403092ae1432
