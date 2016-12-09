'use strict';

const express = require('express');
const helmet = require('helmet');
const api = require('./api');

const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
const LocalStrategy = require('passport-local').Strategy;

// Configure the server
const port = process.env.port || 3000;

// Create a new express server
const app = express();
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(Account.authenticate()));

// Send a response to the index
app.use('/', express.static('src/client'));
app.use('/lib', express.static('bower_components'));

// API routes
app.use('/api', api);

// Start server on the specified port and binding host
app.listen(port, () => {
  console.log(`Node Version: ${process.version}`);
  console.log(`Server starting on http://localhost:${port}`);
});
