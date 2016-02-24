var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    path = require('path'),
    named = require('vinyl-named'),
    config = require('./../../lib/config.json'),
    // 配置生成文件的路径和名称
    pageName = 'entry',
    subPath = 'test';


gulp.task("bundle", function(callback) {
    return gulp.src(path.join(config.root.src, config.tasks.js.src, subPath, pageName + '.js'))
        .pipe(named())
        .pipe(webpack(getConfig()))
        .pipe(gulp.dest(path.join(config.root.dist, config.tasks.js.dist, subPath)))
});

gulp.task("watch", function(callback) {
    return gulp.src(path.join(config.root.src, config.tasks.js.src, subPath, pageName + '.js'))
        .pipe(named())
        .pipe(webpack(getConfig({
            watch: true
        })))
        .pipe(gulp.dest(path.join(config.root.dist, config.tasks.js.dist, subPath)))
});


/**
 * @private
 */
function getConfig(opt) {
    var wpConfig = require('./../../lib/webpack.config.js')
    console.log(wpConfig);
    if (!opt) {
        return wpConfig
    }
    for (var i in opt) {
        wpConfig[i] = opt[i]
    }
    return wpConfig
}