
export const YOUTUBE_SEARCH = 'YOUTUBE_SEARCH';
export const WOLFRAM_SEARCH = 'WOLFRAM_SEARCH';
export const QUIZLET_SEARCH = 'QUIZLET_SEARCH';
export const SEARCH_QUERY = 'SEARCH_QUERY';

import fetch from 'isomorphic-fetch';
import axios from 'axios';

var environment = process.env.NODE_ENV || 'development';
if (environment == "development") {
  var config = require('../config');
}

export function youtubeSearch(query) {

  var baseURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=';
  var apiKey = process.env.REACT_APP_YOUTUBE_API;
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

// export function quizletSearch(query) {
//
//   var baseURL = 'https://api.quizlet.com/2.0/search/sets?q';
//   var apiKey = process.env.REACT_APP_YOUTUBE_API;
//   var endURL = '&type=video&videoCategoryId=27&relevanceLanguage=en&safeSearch=strict&key=';
//   var URL = baseURL + query + endURL + apiKey;
//
//   // fetch Youtube results
//   return fetch(URL)
//   // convert to json
//     .then((response) => response.json())
//     // send to reducer
//     .then((json) => {
//       var items = json.items
//       // console.log(items)
//       return {
//         type: YOUTUBE_SEARCH, items
//       }
//     })
//     // catch function errors
//     .catch(function(err) {
//       console.log('Fetch Error :-S', err);
//     })
// }


// Wolfram Alpha Search

export function wolframSearch(query) {

// return the promise of a server fetch
  return axios.get('/wolfram/' + query)
  // response is already json, so no need to convert
  .then((response) => {
    console.log(response)
    // Wolfram Alpha keeps relevant results in 'pods'
    var results = response.data.queryresult.pods
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
