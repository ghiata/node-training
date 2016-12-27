'use strict';

const usersRouter = require('express').Router(); // eslint-disable-line new-cap
const usersController = require('./users-controller.js');
const authentication = require('./../session').authentication;

usersRouter.all('*', authentication.requireAuthentication);

usersRouter.route('/')
  .get(usersController.getUsers)
  .post(usersController.createUser);

usersRouter.route('/:userId')
  .get(usersController.getUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = usersRouter;
