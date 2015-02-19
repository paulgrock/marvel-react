'use strict';
var to5ify = require("6to5ify");

module.exports = function browserify(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-browserify');

    // Options
    return {
        build: {
            files: {
                    'public/js/app.min.js': [
                    'public/jsx/main.jsx',
                    'public/js/app.js'
                ],
            },
            options: {
                transform:  [ to5ify ]
            }
        }
    };
};
