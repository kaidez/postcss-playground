var gulp = require("gulp");
var postcss = require('gulp-postcss');
var concatCss = require('gulp-concat-css');



gulp.task('css', function () {
  return gulp.src('src/*.css')
    .pipe( postcss([
      require('cssnext')(),
      require('cssnano')()
    ]) );
});


gulp.task('concat',['css'], function () {
  return gulp.src('src/*.css')
    .pipe(concatCss("styles.css"))
    .pipe(gulp.dest('build/'));
});