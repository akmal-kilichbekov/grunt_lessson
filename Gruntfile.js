module.exports = function(grunt){

  // Configuration
  grunt.initConfig({
    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'build/scripts.js'
      },
      css: {
        src: ['css/*.css'],
        dest: 'build/style.css'
      }

    },
    sass: {
      build: {
        files: [{
          src: 'css/sass/styles.scss',
          dest: 'css/styles.css'
        }]
      }
    },
    uglify: {
      build: {
        files: [{
          src: 'build/scripts.js',
          dest: 'build/scripts.js'
        }]
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Register tasks
 grunt.registerTask('concat-js', ['concat:js']);
 grunt.registerTask('concat-css', ['concat:css']);

  grunt.registerTask('run', function(){
    console.log("I am running");
  });

  grunt.registerTask('sleep', function(){
    console.log("I am sleeping");
  });

  grunt.registerTask('all', ['run', 'sleep']);

};
