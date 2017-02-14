var express = require('express');

var environment = process.env.NODE_ENV || 'development';

if (environment == "development") {
    var config = require('../config');
}

var request = require('request');

var wolfram = express.Router();

wolfram.route('/:query').get(function(req, res) {

    var baseURL = 'http://api.wolframalpha.com/v2/query?input=';
    var apiKey = process.env.REACT_APP_WOLFRAM_KEY || config.wolframAlpha.id;
    var endURL = '&output=JSON&appid=';
    var URL = baseURL + req.params.query + endURL + apiKey;

    // fetch Wolfram results
    request.get(URL, function(error, response, body) {
      // console.log('RESPONSE: ' + response.body)
        res.send(response.body);
    })
});

module.exports = wolfram;
