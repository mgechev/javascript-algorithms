'use strict';
var gulp = require('gulp');
var shell = require('gulp-shell');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');
var istanbul = require('gulp-istanbul');
var reporters = require('jasmine-reporters');
var stylish = require('jshint-stylish');
var jshintXMLReporter = require('gulp-jshint-xml-file-reporter');
var jscs = require('gulp-jscs');
var jscs = require('gulp-jscs-custom');
var isWin = /^win/.test(process.platform);

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('jsdoc', shell.task([
  (isWin) ?
  '"node_modules/.bin/jsdoc.cmd" -c ./doc-config.json' :
  './node_modules/.bin/jsdoc -c ./doc-config.json'
]));

gulp.task('lint', function () {
  return gulp.src(['./src/**/*.js'], ['./test/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(jshintXMLReporter))
        .on('end', jshintXMLReporter.writeFile({
            format: 'checkstyle',
            filePath: './test/reports/jshint.xml',
            alwaysReport: 'true'
        }));
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
    .on("error", handleError)
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports({
    	dir: './test/reports/coverage',
    	reporters: ['clover']
    }));
});

gulp.task('jscs', function () {
  return gulp.src(['src/**/*.js', 'test/**/*.js'])
     .pipe(jscs({
            esnext: false,
            configPath: '.jscsrc',
            reporter: 'checkstyle',
            filePath: './test/reports/jscs.xml',
            failOnError: false
        }));
});


gulp.task('build', ['lint', 'jscs', 'test']);
