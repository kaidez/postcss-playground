module.exports = function(grunt) {
  grunt.initConfig({
  postcss: {
    options: {


      processors: [
        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        require('cssnano')() // minify the result
      ]
    },
    dist: {
      src: 'src/*.css',
      dest: 'build/styles.css'
    }
  }
});


grunt.loadNpmTasks('grunt-postcss');
}