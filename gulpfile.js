const gulp = require('gulp');
const eslint = require('gulp-eslint');
const jasmine = require('gulp-jasmine');

gulp.task('test', () => {
  'use strict';
  return gulp.src('test/**/*.spec.js')
    .pipe(jasmine());
});

gulp.task('lint', ()=> {
  'use strict';
  return gulp.src(['src/**/*.js', 'test/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('build', gulp.parallel(['lint', 'test']));
