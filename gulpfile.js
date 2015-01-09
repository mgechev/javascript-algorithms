'use strict';
var gulp = require('gulp'),
    shell = require('gulp-shell');

gulp.task('jsdoc', shell.task([
    './node_modules/.bin/jsdoc -c ./doc-config.json',
]));