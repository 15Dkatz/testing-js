module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [],
    exclude: [],
    preprocessors: {
      'test/*.html': ['html2js'],
      'js/*.js': ['coverage']
    },
    reporters: ['progress', 'coverage'],
    port: 9877,
    autoWatch: true,
    browsers: [],
    singleRun: false,
    logLevel: config.LOG_INFO,
    coverageReporter: {
      dir: 'test/coverage',
      instrumenter: {
        'js/*.js': ['istanbul']
      },
      reporters: [
        {type: 'html', subdir: 'report-html'},
        {type: 'lcov', subdir: 'report-lcov'},
        {type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt'}
      ]
    }
  });
;}