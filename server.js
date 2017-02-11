require('dotenv').config()
var express = require('express')
var app = express()
var PORT = process.env.PORT || 3001;

var request = require('request');
var wolfram = require('./client/src/controllers/wolframController');
var user = require('./client/src/controllers/userController');

var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var session  = require('express-session');
var passport = require('passport');
var Promise = require("bluebird");
mongoose.Promise = Promise;
const path = require('path');

// PRODUCTION SETTINGS
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
}

mongoose.connect(process.env.MONGODB_URI); // connect to our database

// Middleware

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

require('./passport')(passport); // pass passport for configuration

// required for passport
app.use(session({ secret: 'spoon' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//====================================================================
// ROUTES
// ===================================================================

app.use('/', wolfram)

app.use('/', user)

app.get('/', function(req, res) {
	res.sendFile('index.html');
});


app.listen(PORT, function() {
    console.log('Example app listening on port' + PORT)
})
