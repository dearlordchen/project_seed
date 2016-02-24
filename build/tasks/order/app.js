var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    path = require('path'),
    named = require('vinyl-named'),
    config = require('./../../lib/config.json'),
    // 配置生成文件的路径和名称
    pageName = 'app',
    subPath = 'order';


gulp.task("bundle", function(callback) {
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
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
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
    var config = require('./../../lib/webpack.config.js');
    if (!opt) {
        return config
    }
    for (var i in opt) {
        config[i] = opt[i]
    }
    return config
}