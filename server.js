var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
require('./config/database');

//Import routers
var indexRouter = require('./routes/index');
var flightsRouter = require('./routes/flights');
var destinationsRouter = require('./routes/destinations');
var ticketsRouter = require('./routes/tickets');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//set up router files as middleware
app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/', destinationsRouter);
app.use('/', ticketsRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
