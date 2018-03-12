// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//var favicon = require('serve-favicon');
//var logger = require('morgan');
var cookieParser = require('cookie-parser');
var passport = require('passport');

// Passport config 
require('./server/config/passport')

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://127.0.0.1:27017/univDB', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('Mongoose connection succesful'))
  .catch((err) => console.error(err));

// Get our API routes
//const api = require('./server/routes/api');
const mongoseApi = require('./server/routes/mongoseApi');
const routesApi = require('./server/routes/index');
//var cors = require('cors')
const app = express();
// CORS
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// });

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(cors());

// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
//app.use(cors());
// Set our api routes
//app.use('/api', api);
app.use('/mongose', mongoseApi);
app.use('/api', routesApi);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Error Handling

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: {}
  });
});
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => {console.log(`API running on localhost:${port}`)});