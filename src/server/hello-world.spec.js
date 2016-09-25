'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const helloWorld = require('./hello-world');

/**
 * Describe helloWorld
 */
describe('helloWorld', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {};

    res = {
      send: sinon.spy()
    };
  });

  /**
   * helloWorld method
   */
  describe('helloWorld method', () => {
    it('should respond by sending a hello world message', () => {
      helloWorld.helloWorld(req, res);
      expect(res.send.calledWith('Hello world')).to.equal(true);
    });
  });
});
