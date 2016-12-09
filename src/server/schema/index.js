'use strict';

const schemaRouter = require('express').Router(); // eslint-disable-line new-cap
const schemaController = require('./schema-controller.js');

schemaRouter.route('/')
  .get(schemaController.getSchema);

module.exports = schemaRouter;
