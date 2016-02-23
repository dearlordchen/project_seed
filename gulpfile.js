var gulp = require('gulp');

if (!gulp.env.page) {
    console.error('缺少page参数');
    return false;
}

var pj = require('./tasks/' + gulp.env.page);