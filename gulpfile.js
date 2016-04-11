'use strict';
var gulp = require('gulp');
var shell = require('gulp-shell');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');
var istanbul = require('gulp-istanbul');
var reporters = require('jasmine-reporters');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
var isWin = /^win/.test(process.platform);

gulp.task('jsdoc', shell.task([
  (isWin) ?
  '"node_modules/.bin/jsdoc.cmd" -c ./doc-config.json' :
  './node_modules/.bin/jsdoc -c ./doc-config.json'
]));

gulp.task('lint', function () {
  return gulp.src(['./src/**/*.js'], ['./test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

gulp.task('pre-test', function () {
  return gulp.src(['./src/**/*.js'])
    // Covering files 
    .pipe(istanbul())
    // Force `require` to return covered files 
    .pipe(istanbul.hookRequire());
});
 
gulp.task('test', ['pre-test'], function () {
  return gulp.src('test/**/*.spec.js')
    .pipe(jasmine({
    	reporter: new reporters.JUnitXmlReporter({
    		savePath: 'test/reports'
    	})
    }))
    // Creating the reports after tests ran 
    .pipe(istanbul.writeReports({
    	dir: './test/reports/coverage',
    	reporters: ['clover', 'cobertura']
    }));
});

gulp.task('jscs', function () {
  return gulp.src(['src/**/*.js', 'test/**/*.js'])
    .pipe(jscs());
});

gulp.task('build', ['lint', 'jscs', 'test']);
