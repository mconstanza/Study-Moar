var express = require('express')
var app = express()
var PORT = process.env.PORT || 3001;

// var router = express.Router();

var request = require('request');
var wolfram = require('./client/src/controllers/wolframController');

var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require('passport');
var Promise = require("bluebird");
mongoose.Promise = Promise;
const path = require('path');

// PRODUCTION SETTINGS
// if (process.env.NODE_ENV === 'production') {
app.use(express.static('./client/build'));
// }

// Middleware

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));


//====================================================================
// ROUTES
// ===================================================================

app.use('/', wolfram)

app.get('/', function(req, res) {
	res.sendFile('index.html');
});


app.listen(PORT, function() {
    console.log('Example app listening on port 3001!')
})
