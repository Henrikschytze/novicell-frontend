'use strict';

const gulp = require('gulp');
const config = require('../config.js');
const mergeStream = require('merge-stream');
const plugins = require('gulp-load-plugins')();

var streams = config.buildCopy.map(exports.default = function (x) {
    console.log('copy task beginning')
    return gulp.src(x.from)
        .pipe(gulp.dest(x.to));
});

