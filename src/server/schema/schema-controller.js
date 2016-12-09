'use strict';

const schema = require('./schema.json');

const schemaController = {
  /**
   * GET /users
   */
  getSchema(req, res) {
    res.status(200);
    res.json(schema);
  }

};

module.exports = schemaController;
