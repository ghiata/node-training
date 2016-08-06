'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./config');

const paths = config.paths;

// Lint all JavaScript files
gulp.task('lint', () => {
  gulp.src(['./gulpfile.js', './config', paths.server.jsFiles])
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format());
});

// Start the server
gulp.task('serve', ['lint'], () => {
  process.env.port = config.env.port;

  const options = {
    script: paths.server.app,
    env: {
      port: config.env.port
    },
    watch: paths.server.base,
    tasks: 'lint'
  };

  return plugins.nodemon(options);
});

// List the available gulp tasks
gulp.task('help', plugins.taskListing);

// Default task
gulp.task('default', ['help']);
