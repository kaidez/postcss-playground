var gulp = require("gulp");
var postcss = require('gulp-postcss');
var concatCss = require('gulp-concat-css');
var cssnano = require('cssnano');



gulp.task('css', function () {
  gulp.src('src/*.css')
    .pipe(postcss([
        cssnano()
    ]))
    .pipe(gulp.dest('build/'));
});


gulp.task('concat',['css'], function () {
  return gulp.src('src/*.css')
    .pipe(concatCss("styles.css"))
    .pipe(gulp.dest('build/'));
});