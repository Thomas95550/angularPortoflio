// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

// Get our API routes
const api = require('./server/routes/api');

// Parsers for POST data
app.use(bodyParser());
app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({extended:true}));

// Set our api routes
app.use('/api', api);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(process.env.PORT || 8080);
