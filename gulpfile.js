'use strict';
var config = require('./gulp/config.js');

// fix VS Task Runner Explorer
var Promise = require('es6-promise').Promise;

function build() {
    config.loadTasks.forEach(function (x) {
        require('./gulp/tasks/' + x);
    });
}

function styles(cb) {
    require('./gulp/tasks/styles');
    cb();
}

const {series} = require('gulp');
const del = require('del');


function clean(cb) {
    del(config.cleanPaths, {force: true});
    cb();
}

exports.styles = styles;
exports.build = build;
exports.default = series(clean, styles);