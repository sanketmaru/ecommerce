var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config/default');
var orderRoutes = require('./routes/order');
var productRoutes = require('./routes/product');
var mongoose = require('mongoose');


var app = express();

// get an instance of the express Router
var router = express.Router();


// Workers can share any TCP connection
app.listen(config.port, function() {
  console.log("Server listening to http on port " + config.port);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

orderRoutes(router);
productRoutes(router);

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

app.use(function(req, res, next) {
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  next();
});

module.exports = app;
