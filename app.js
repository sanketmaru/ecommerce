var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config/default');
var orderRoutes = require('./routes/order');
var productRoutes = require('./routes/product');
var userRoutes = require('./routes/user');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var passportConfig = require('./config/passport');

var app = express();

// get an instance of the express Router
var router = express.Router();

// Workers can share any TCP connection
app.listen(config.port, function() {
  console.log("Server listening to http on port " + config.port);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', router);

//require for passport authentication
app.use(session({ secret: 'ynwalivfc' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//configure passport authentication strategy
passportConfig(passport);


app.use('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('login');
});

// show the signup form
app.get('/signup', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('signup');
});

app.use('/', function(req, res) {
    res.render('index');
});

//set up the routes
orderRoutes(router);
productRoutes(router);
userRoutes(router);


// Connect to database
var mongooseConnection = mongoose.connect(config.mongo.uri, config.mongo.options).connection;
mongooseConnection.on('error', function(err) { console.log("mongoose error :- " + err.message); });
mongooseConnection.once('open', function() {
  console.log("mongodb connection open");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(req, res, next) {
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  next();
});

module.exports = app;
