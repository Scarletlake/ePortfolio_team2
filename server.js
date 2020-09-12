const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const http = require('http');
const app = express();
<<<<<<< HEAD
=======
const cors = require('cors');
>>>>>>> ouyangh_merge

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

<<<<<<< HEAD
// Define Routes
app.use('/api/user', require('./backend/routes/usersRouter'));
// app.use('/api/portfolio', require('./backend/routes/portfolioRouter'));
=======
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));



// Define Routes
app.use('/api/user', require('./backend/routes/usersRouter'));
//app.use('/api/portfolio', require('./backend/routes/portfolioRouter'));
>>>>>>> ouyangh_merge

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

<<<<<<< HEAD
=======

>>>>>>> ouyangh_merge
module.exports = server;