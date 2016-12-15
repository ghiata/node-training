'use strict';

const Config = {
  env: {
    port: 3000
  },
  paths: {
    server: {
      base: './src/server',
      jsFiles: './src/server/**/*.js',
      specs: './src/server/**/*.spec.js',
      coverage: './src/server/**/!(*spec.js)'
    },
    client: {
      base: './src/client/',
      index: './src/client/index.html',
      modules: './src/client/**/*.module.js',
      directives: './src/client/**/*.directive.js',
      controllers: './src/client/**/*.controller.js',
      factories: './src/client/**/*.factory.js'
    }
  }
};

module.exports = Config;
