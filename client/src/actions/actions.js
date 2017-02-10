
export const YOUTUBE_SEARCH = 'YOUTUBE_SEARCH';
export const WOLFRAM_SEARCH = 'WOLFRAM_SEARCH';
export const SEARCH_QUERY = 'SEARCH_QUERY';

import fetch from 'isomorphic-fetch';
import axios from 'axios';

var environment = process.env.NODE_ENV || 'development';
if (environment == "development") {
  var config = require('../config');
}


export function youtubeSearch(query) {

  var baseURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=';
  var apiKey = process.env.YOUTUBE_KEY || config.youtube.key;
  var endURL = '&type=video&videoCategoryId=27&relevanceLanguage=en&safeSearch=strict&key=';
  var URL = baseURL + query + endURL + apiKey;

  // fetch Youtube results
  return fetch(URL)
  // convert to json
    .then((response) => response.json())
    // send to reducer
    .then((json) => {
      var items = json.items
      // console.log(items)
      return {
        type: YOUTUBE_SEARCH, items
      }
    })
    // catch function errors
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    })
}


// Wolfram Alpha Search

export function wolframSearch(query) {

  // // fetch Youtube results
  // fetch('/wolfram/' + query)
  // // convert to json
  //   .then((response) => {
  //     console.log(response)
  //       return {
  //         type: WOLFRAM_SEARCH, response
  //       }
  //   })
  //   // catch function errors
  //   .catch(function(err) {
  //     console.log('Fetch Error :-S', err);
  //   })

  return axios.get('/wolfram/' + query)
  .then((response) => {
    console.log(response)
    var results = response.data.pod;
    return {
      type: WOLFRAM_SEARCH, results
    }
  })
  .catch((error) => {
    console.log(error);
  })
}

export function searchQuery(query) {
  return {
    type: SEARCH_QUERY, query
  }
}
