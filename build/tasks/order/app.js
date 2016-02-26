var gulp = require('gulp')
var gutil = require('gulp-util')
var webpack = require('webpack')
var path = require('path')
var named = require('vinyl-named')
var config = require('./../../lib/config.json')

    // 配置生成文件的路径和名称
var pageName = 'app'
var subPath = 'order'

gulp.task('bundle', function(callback) {
    webpack(getConfig({
        entry: {
            app: './' + path.join(config.root.src, config.tasks.js.src, subPath, pageName + '.js'),
            vendor: ['vue', 'vue-router']
        },
        output: {
            path: path.resolve(path.join(config.root.dist, config.tasks.js.dist, subPath)),
            filename: '[name].js'
        }
    }), function(err, stats) {
        if (err) throw new gutil.PluginError('webpack', err)
        gutil.log('[bundle]', stats.toString({
            // output options
        }))
        callback()
    })
})

gulp.task('watch', function(callback) {
    return gulp.src(path.join(config.root.src, config.tasks.js.src, subPath, pageName + '.js'))
        .pipe(named())
        .pipe(webpack(getConfig({
            watch: true
        })))
        .pipe(gulp.dest(path.join(config.root.dist, config.tasks.js.dist, subPath)))
})

/**
 * @private
 */
function getConfig(opt) {
    var config = require('./../../lib/webpack.config.js')
    if (!opt) {
        return config
    }
    for (var i in opt) {
        config[i] = opt[i]
    }
    return config
}
