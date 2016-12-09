'use strict';

const loginRouter = require('express').Router(); // eslint-disable-line new-cap
const loginController = require('./login-controller.js');

loginRouter.route('/').get(loginController.getlogin);
loginRouter.route('/').post(loginController.postlogin);

module.exports = loginRouter;
