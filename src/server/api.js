'use strict';

const api = require('express').Router(); // eslint-disable-line new-cap
const login = require('./login');
const users = require('./users');
const schema = require('./schema');

api.use('/login', login);
api.use('/users', users);
api.use('/schema', schema);

module.exports = api;
