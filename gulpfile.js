'use strict';
var gulp = require('gulp');
var shell = require('gulp-shell');
var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine');
var isWin = /^win/.test(process.platform);

gulp.task('jsdoc', shell.task([
  (isWin) ?
  '"node_modules/.bin/jsdoc.cmd" -c ./doc-config.json' :
  './node_modules/.bin/jsdoc -c ./doc-config.json'
]));

gulp.task('test', function () {
  return gulp.src('test/**/*.spec.js')
    .pipe(jasmine());
});

gulp.task('lint', function () {
  return gulp.src(['src/**/*.js', 'test/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('build', ['lint', 'test']);
