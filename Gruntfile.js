module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    blanket_mocha: {
      options: {
        run: true,
        reporter: 'Min',
        // minimum of 70% coverage of code on tests
        threshold: 70
      },
      files: {
        src: 'test/*.html'
      }
    },
    karma: {
        options: {
          configFile: 'karma.conf.js',
          file: [
            'node_modules/chai/chia.js',
            'node_modules/sinon-chai/lib/sinon-chai.js',
            'node_modules/sinon/pkg/sinon.js',

            'js/calculator.js',
            'test/calculator-test.js',

            'test/index.html'
          ]
        },

        dev: {
          browsers: ['Chrome', 'Firefox', 'PhantomJS']
        },

        prod: {
          singleRun: true,
          browsers: ['PhantomJS']
        }
      }
  });

  grunt.registerTask('default', ['blanket_mocha']);
}