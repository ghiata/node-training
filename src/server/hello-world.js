'use strict';

const helloWorld = {
  /**
   * Function that we can unit-test
   */
  helloWorld(req, res) {
    res.send('Hello world');
  }
};

module.exports = helloWorld;
