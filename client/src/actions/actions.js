export const YOUTUBE_REQUEST = 'YOUTUBE_REQUEST';
export const WOLFRAM_REQUEST = 'WOLFRAM_REQUEST';
export const YOUTUBE_RECEIVE = 'YOUTUBE_RECEIVE';
export const WOLFRAM_RECEIVE = 'WOLFRAM_RECEIVE';
export const QUIZLET_REQUEST = 'QUIZLET_REQUEST';
export const QUIZLET_RECEIVE = 'QUIZLET_RECEIVE';
export const SEARCH_QUERY = 'SEARCH_QUERY';

import fetch from 'isomorphic-fetch';
import axios from 'axios';

var environment = process.env.NODE_ENV || 'development';
if (environment == "development") {
    var config = require('../config');
}

// this action will tell the state to show loading screens for each api call

function request(API) {
    switch (API) {
        case 'youtube':
            return {type: YOUTUBE_REQUEST}
        case 'wolfram':
            return {type: WOLFRAM_REQUEST}
        case 'quizlet':
            return {type: QUIZLET_REQUEST}
        default:
            return {type: YOUTUBE_REQUEST}
    }

}

// this action removes loading screens and sets results to state

function receive(API, results) {

    switch (API) {
        case 'youtube':
            return {type: YOUTUBE_RECEIVE, results}
        case 'wolfram':
            return {type: WOLFRAM_RECEIVE, results}
        case 'quizlet':
            return {type: QUIZLET_RECEIVE, results}
        default:
            return {type: YOUTUBE_RECEIVE, results}
    }

}


// CONTROLS YOUTUBE API CALLS
export function youtubeSearch(query) {

    var baseURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=';
    var apiKey = process.env.REACT_APP_YOUTUBE_API;
    var endURL = '&type=video&videoCategoryId=27&relevanceLanguage=en&safeSearch=strict&key=';
    var URL = baseURL + query + endURL + apiKey;

    return dispatch => {
        dispatch(request('youtube'))

        // fetch Youtube results
        return fetch(URL)
        // convert to json
            .then((response) => response.json())
        // send to reducer
            .then((json) => {
            var results = json.items
            dispatch(receive('youtube', results))
        })
        // catch function errors
            .catch(function(err) {
            console.log('Fetch Error :-S', err);
        })
    }
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

    return dispatch => {
        dispatch(request('wolfram'))
        // return the promise of a server fetch
        return axios.get('/wolfram/' + query)
        // response is already json, so no need to convert
            .then((response) => {
            // Wolfram Alpha keeps relevant results in 'pods'
            var results = response.data.queryresult.pods
            dispatch(receive('wolfram', results))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function searchQuery(query) {
    return {type: SEARCH_QUERY, query}
}
