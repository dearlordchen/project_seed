var gulp = require('gulp')
var gutil = require('gulp-util')
var clean = require('gulp-clean')
var sftp = require('gulp-sftp')
var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var myConfig = require('../../config/my-config.json')

// view文件名
var viewName = 'm_mall'

// 配置生成jsi和cssi文件，以及view的html文件
function generateSinclude (webpackConf, viewName) {
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
  return webpackConf;
}

//
// gulp任务
// -------------------------------

// 清除多余文件
gulp.task('clean', function () {
  return gulp.src(['../../dist/' + viewName + '/'], {read: false})
    .pipe(clean({ force: true }))
})

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
gulp.task('webpack-dev', ['clean'], function (cb) {
  var webpackDevConf = require('../../config/webpack.dev.conf.js')
  var webpackConf = Object.create(webpackDevConf)

  webpackConf.entry[viewName] = path.resolve(__dirname, './main.js')

  webpackConf.output.path += '/' + viewName + '/'
  webpackConf.output.publicPath += '/' + viewName + '/'

  generateSinclude(webpackConf, viewName)

  webpack(webpackConf, function (err, stats) {
    if (err) throw new gutil.PluginError('build', err)
    gutil.log('[build]', stats.toString({
      colors: true
    }))
    cb()
  })
})

gulp.task('webpack-prod', ['clean'], function (cb) {
  var webpackProdConf = require('../../config/webpack.prod.conf.js')
  var webpackConf = Object.create(webpackProdConf)

  webpackConf.entry[viewName] = path.resolve(__dirname, './main.js')

  webpackConf.output.path += '/' + viewName + '/'
  webpackConf.output.publicPath += '/' + viewName + '/'

  generateSinclude(webpackConf, viewName)

  webpack(webpackConf, function (err, stats) {
    if (err) throw new gutil.PluginError('build', err)
    console.log(stats)
    gutil.log('[build]', stats.toString({
      colors: true
    }))
    cb()
  })
})

gulp.task('default', ['upload-ssi-dev'], function () {
  gulp.watch('./**', ['upload-ssi-dev'])
})

gulp.task('beta', function () {
  gulp.start('upload-ssi-beta')
})
