'use strict';
var jsdoc = require('gulp-jsdoc'),
    gulp = require('gulp');

gulp.task('jsdoc', function () {
  gulp.src('./src/**/*.js')
    .pipe(jsdoc('../javascript-algorithms-docs'));
});