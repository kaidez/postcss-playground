module.exports = function(grunt) {
  grunt.initConfig({
    postcss: {
      options: {
        processors: [
          require("postcss-cssnext")(),
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'css-build/*.css',
        dest: 'build/style.css'
      }
    }
  });


  grunt.loadNpmTasks('grunt-postcss');
}