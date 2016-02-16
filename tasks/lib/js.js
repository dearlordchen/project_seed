'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var sourcemaps = require("gulp-sourcemaps");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var path = require('path');
var config = require('./config.js');
var watch = require('gulp-watch');

module.exports.run = function (pageName, subPath) {
    var filePath = path.join(config.root.src, config.tasks.js.src, subPath, pageName + '.js');
    var destPath = path.join(config.root.dest, config.tasks.js.dest, subPath);

    watch(filePath, function () {
        var b = browserify({
            entries: filePath,
            debug: true
        });

        return b.bundle()
            .pipe(source(pageName + ".js"))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(destPath));
    });

}