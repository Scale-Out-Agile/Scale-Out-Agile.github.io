/*
 * Scale-Out-Agile
 * 
 * Arlo Belshee
 * https://github.com/Scale-Out-Agile/Scale-Out-Agile.github.io
 * 
 * Copyright (c) 2014
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({

        // Project metadata
        pkg: grunt.file.readJSON('package.json'),
        vendor: grunt.file.readJSON('.bowerrc').directory,
        site: grunt.file.readYAML('_config.yml'),
        bootstrap: '<%= vendor %>/bootstrap',


        // Before generating any new files, remove files from previous build.
        clean: {
            site: ['<%= site.dest %>/**/*.*', '<%= site.dest %>/*/*/', '<%= site.dest %>/*/']
        },


        // Lint JavaScript
        jshint: {
            all: ['Gruntfile.js', 'templates/helpers/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },


        // Build HTML from templates and data
        assemble: {
            options: {
                flatten: true,
                production: true,
                assets: '<%= site.assets %>',
                postprocess: require('pretty'),

                // Metadata
                pkg: '<%= pkg %>',
                site: '<%= site %>',
                data: ['<%= site.data %>'],

                // Templates
                partials: '<%= site.includes %>',
                layoutdir: '<%= site.layouts %>',
                layout: '<%= site.layout %>',

                // Extensions
                helpers: '<%= site.helpers %>',
                plugins: '<%= site.plugins %>'
            },
            site: {
                files: { '<%= site.dest %>/': ['<%= site.templates %>/*.hbs'] }
            }
        },


        // Compile LESS to CSS
        less: {
            options: {
                vendor: 'vendor',
                paths: [
          '<%= site.theme %>',
          '<%= site.theme %>/bootstrap',
          '<%= site.theme %>/components',
          '<%= site.theme %>/utils'
        ]
            },
            site: {
                src: ['<%= site.theme %>/site.less'],
                dest: '<%= site.assets %>/css/site.css'
            }
        },


        // Copy Bootstrap's assets to site assets
        copy: {
            assets: {
                files: [
          { expand: true, cwd: '<%= bootstrap %>/dist/fonts', src: ['*.*'], dest: '<%= site.assets %>/fonts/' },
          { expand: true, cwd: '<%= bootstrap %>/dist/js', src: ['*.*'], dest: '<%= site.assets %>/js/' },
        ]
            }
        },

        watch: {
            all: {
                files: ['<%= jshint.all %>'],
                tasks: ['jshint', 'nodeunit']
            },
            site: {
                files: ['Gruntfile.js', '<%= less.options.paths %>/*.less', 'templates/**/*.hbs'],
                tasks: ['design']
            }
        },

        gitcheckout: {
            src: {
                options: {
                    branch: 'src'
                }
            },
            master: {
                options: {
                    branch: 'master'
                }
            }
        }
    });

    // Load npm plugins to provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-readme');
    grunt.loadNpmTasks('grunt-sync-pkg');
    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('assemble-less');
    grunt.loadNpmTasks('assemble');

    // Build HTML, compile LESS and watch for changes. You must first run "bower install"
    // or install Bootstrap to the "vendor" directory before running this command.
    grunt.registerTask('design', ['clean', 'assemble', 'less:site', 'watch:site']);

    grunt.registerTask('docs', ['readme', 'sync']);

    grunt.registerTask('default', ['clean', 'jshint', 'copy:assets', 'assemble', 'less', 'docs']);

    grunt.registerTask('deploy', ['gitcheckout:master', 'gitcheckout:src']);
};