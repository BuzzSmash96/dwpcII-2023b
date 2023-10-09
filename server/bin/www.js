#!/usr/bin/env node

/**
 * Module dependencies.
 */
// Importing the server logic
// require is used to import code from an external file
// Importing an external dependecy
// Module that allows to communicate with a client
// usign HTTP protocol
import http from 'http';
import app from '../app';

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
// Store the port info in the app
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app); // (req, res) => { acciones }

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      process.exit(1);
      break;
    case 'EADDRINUSE':
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {}

/**
 * Listen on provided port, on all network interfaces.
 */
// Specifying the port where the server will be listening
server.listen(port);
// Attaching Callbacks to events
server.on('error', onError);
server.on('listening', onListening);
