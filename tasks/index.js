var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    js = require('./lib/js.js'),
    // 配置生成文件的路径和名称
    pageName = 'index',
    subPath = 'portal';

gulp.task('js', function() {
    js.run(pageName, subPath);
});

gulp.task('default', gulpSequence('js'));