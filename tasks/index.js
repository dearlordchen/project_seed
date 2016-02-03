var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    js = require('./lib/js.js'),
    pageName = 'index';

gulp.task('js', function() {
    js.run(pageName);
});

gulp.task('default', gulpSequence('js'));