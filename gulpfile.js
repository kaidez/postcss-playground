var gulp = require("gulp");
var postcss = require('gulp-postcss');


gulp.task('css', function () {
  return gulp.src('src/*.css')
    .pipe( postcss([
      require('cssnext')(),
      require('cssnano')()
    ]) )
    .pipe( gulp.dest('build/') );
});