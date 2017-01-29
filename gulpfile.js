'use strict';

var css = [
  './assets/css/index.css'
];

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");
var stripCssComments = require('gulp-strip-css-comments');

gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('minify-css', function(){
  gulp.src(css)
      .pipe(stripCssComments({all: true}))
      .pipe(concat('app.min.css'))
      .pipe(cssmin())
      .pipe(gulp.dest('./assets/css/'));
});

// gulp.task('sass:watch', function () {
//   gulp.watch('./assets/sass/**/*.scss', ['sass']);
// });

gulp.task('default',['sass', 'minify-css']);

gulp.task('watch', function() {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
  gulp.watch(css, ['minify-css']);
});
