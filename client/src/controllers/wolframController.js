var express = require('express');
var config = require('../config');
var request = require('request');
var parseString = require('xml2js').parseString;

var wolfram = express.Router();


wolfram.route('/wolfram/:query').get(function(req, res) {

    var baseURL = 'http://api.wolframalpha.com/v2/query?input=';
    var apiKey = config.wolframAlpha.id;
    var endURL = '&appid=';
    var URL = baseURL + req.params.query + endURL + apiKey;

    // fetch Wolfram results
    request.get(URL, function(error, response, body) {
      parseString(response.body, function(err, result) {
        res.send(JSON.stringify(result.queryresult));
      })
    })
});

module.exports = wolfram;