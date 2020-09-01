const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const http = require('http');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/user', require('./backend/routes/usersRouter'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// Listen on the port
const PORT = process.env.PORT || 5000;
const port = normalizePort(PORT);

const server = http.createServer(app);

server.listen(port);


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}