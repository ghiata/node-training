'use strict';

const express = require('express');
const helloWorld = require('./hello-world');

// Configure the server
const port = process.env.port || 3000;

// Create a new express server
const app = express();

// Send a response to the index
app.get('/', helloWorld.helloWorld);

// Start server on the specified port and binding host
app.listen(port, () => {
  console.log(`Node Version: ${process.version}`);
  console.log(`Server starting on http://localhost:${port}`);
});
