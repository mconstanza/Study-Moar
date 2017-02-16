export const YOUTUBE_REQUEST = 'YOUTUBE_REQUEST';
export const WOLFRAM_REQUEST = 'WOLFRAM_REQUEST';
export const YOUTUBE_RECEIVE = 'YOUTUBE_RECEIVE';
export const WOLFRAM_RECEIVE = 'WOLFRAM_RECEIVE';
export const QUIZLET_REQUEST = 'QUIZLET_REQUEST';
export const QUIZLET_RECEIVE = 'QUIZLET_RECEIVE';
export const SEARCH_QUERY = 'SEARCH_QUERY';
export const ACTIVE_TAB = 'ACTIVE_TAB';

import fetch from 'isomorphic-fetch';
import axios from 'axios';

var environment = process.env.NODE_ENV || 'development';
if (environment == "development") {
    var config = require('../config');
}

export function activeTab(tab) {
    return {type: ACTIVE_TAB, tab}
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

// Searches all APIs at once
export function search(query, user) {
  if (user){
    postSearchToHistory(query, user);
  }
  youtubeSearch(query);
  quizletSearch(query);
  wolframSearch(query);
}

function postSearchToHistory(query, user) {
  axios.post('/user/' + user._id +'/history', {
    query: query
  })
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
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

export function quizletSearch(query) {

    return dispatch => {
        dispatch(request('quizlet'))
        // return the promise of a server fetch
        return axios.get('/quizlet/' + query)
        // response is already json, so no need to convert
            .then((response) => {
            var data = response.data.sets
            if (data == undefined) {
                data = []
            }
            // console.log("Quizlet:", data)

            var setIds = data.map((set) => {
              return set.id
            })

            // console.log("/nSetIds:", setIds)

            quizletSetData(setIds)
            .then((response) => {
              var results = response.data;
              dispatch(receive('quizlet', results))
            })


        }).catch((error) => {
            console.log(error);
        })
    }
}

function quizletSetData(setIds) {

    var idString ='';

    for (var i =0; i < setIds.length; i++) {
      if(i < setIds.length -1){
        idString += setIds[i] + ','
      }
      else{
        idString += setIds[i]
      }

    }
    // console.log("/nIDSTRING:",idString)

    return axios.get('/quizlet/sets/' + idString).then((response) => {
        return response
    })
}

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
        if (results == undefined) {
            results = []
        }
        dispatch(receive('wolfram', results))
    }).catch((error) => {
        console.log(error);
    })
}
}

export function searchQuery(query) {
return {type: SEARCH_QUERY, query}
}
