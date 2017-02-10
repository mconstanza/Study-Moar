import express from 'express';

var environment = process.env.NODE_ENV || 'development';

if (environment == "development") {
  import config from './client/src/config'
}



var router = express.Router();

router.get('/wolfram/:query', function(req, res) {

    var baseURL = 'http://api.wolframalpha.com/v1/simple?appid=';
    var apiKey = WOLFRAM_KEY || config.wolframAlpha.id;
    var endURL = '&i='
    var URL = baseURL + apiKey + endURL + req.params.query ;

    // fetch Youtube results
    return fetch(URL)
    // convert to json
      .then((response) => response.json())
      // send to reducer
      .then((json) => {
        console.log(json)
        res.send(json);
      })
      // catch function errors
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      })
  }

  module.exports = router;
