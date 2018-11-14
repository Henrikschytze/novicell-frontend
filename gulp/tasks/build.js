// console.log('this is a build task')

// const config = require('../config.js');
 const del = require('del');


const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('../config.js');
const {series} = require('gulp');

function clean(cb) {
    del(config.cleanPaths, {force: true});
    cb();
}

function build(cb) {
    //gulp.startconfig.buildTasks);
    console.log('do build stuff');
    cb();
}
