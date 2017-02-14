var express = require('express');
var request = require('request');
var environment = process.env.NODE_ENV || 'development';

if (environment == "development") {
    var config = require('../config');
}

var quizlet = express.Router();


quizlet.route('/:query').get(function(req, res) {

  var baseURL = 'https://api.quizlet.com/2.0/search/sets?q=';
  var endURL = '&client_id=';
  var apiKey = process.env.QUIZLET_ID;
  var URL = baseURL + req.params.query + endURL + apiKey;

    // fetch Quizlet results
    request.get(URL, function(error, response, body) {
      if (error){
        console.log(error)
      }

        res.send(response.body);
    })
});

quizlet.route('/sets/:query').get(function(req, res) {

  var baseURL = 'https://api.quizlet.com/2.0/sets?set_ids=';
  var endURL = '&client_id=';
  var apiKey = process.env.QUIZLET_ID;
  var URL = baseURL + req.params.query + endURL + apiKey;


    // fetch Quizlet results
    request.get(URL, function(error, response, body) {
      if (error){
        console.log(error)
      }

      // console.log("Quizlet Response:", response.body)

        res.send(response.body);
    })
});

module.exports = quizlet;
