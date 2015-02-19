'use strict';


module.exports = function clean(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Options
    return {
      scripts: {
        files: [
            'public/jsx/**/*.jsx',
            'public/js/app.js'
        ],
        tasks: ['browserify'],
        options: {
          spawn: false,
          livereload: true
        },
      }
    }
}
