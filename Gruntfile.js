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
        src: 'src/*.css',
        dest: 'build/style.css'
      }
    }
  });


  grunt.loadNpmTasks('grunt-postcss');
}