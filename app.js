var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var nconf = require('nconf');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var passport = require('passport');
var session  = require('express-session');
var mongoose = require('mongoose');
var app = express();
var redisstore = require('connect-redis')(session);
require('./routes/index')(app);

//Setup nconf to use (in-order): 1. Command-line, 2. Env vars, 3. file
nconf.argv().env().file({ file: 'config/config.json' });

//Connect to mongoDB database
//mongoose.connect(nconf.get("DATABASE");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
app.use(session({ name: 'payoutsports',
                  store: new redisstore({
                    host: nconf.get("LOCAL"),
                    port: nconf.get("REDISPORT"),
                    prefix:'sess'
                  }),
                  resave: false, 
                  proxy: false,
                  saveUninitialized: false, 
                  secret: nconf.get("SESSION_SECRET") 
                }));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;