'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  extractJsonLike = require('gulp-extract-json-like'),
  jsonLint = require('gulp-json-lint'),
  replace = require('gulp-replace'),
  shell = require('gulp-shell'),
  soften = require('gulp-soften'),
  template = require('gulp-template');

var srcDir = './src/**/*.apib',
  outDir = './build/',
  outFile = 'railsblocks-api-spec.apib';

gulp.task('default', ['build']);

gulp.task('build', ['validate', 'main']);

gulp.task('validate', function() {
  gulp.src(srcDir)
    .pipe(replace(/^( {8}[^{]\S.*|\S.*| {4}(\+|-|\*).*)/gm, ''))
    .pipe(extractJsonLike())
    .pipe(jsonLint())
    .pipe(jsonLint.report('verbose'));
});

gulp.task('main', function() {
  gulp.src(srcDir)
    .pipe(soften(4))
    .pipe(concat('railsblocks-api-spec.apib'))
    .pipe(gulp.dest('./build/'));
});