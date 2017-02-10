
export const YOUTUBE_SEARCH = 'YOUTUBE_SEARCH';
export const SEARCH_QUERY = 'SEARCH_QUERY';

import fetch from 'isomorphic-fetch'
import config from '../config';

export function youtubeSearch(query) {

  var baseURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=';
  var apiKey = config.youtube.key;
  var endURL = '&type=video&videoCategoryId=27&relevanceLanguage=en&safeSearch=strict&key=';
  var URL = baseURL + query + endURL + apiKey;

  // fetch Youtube results
  return fetch(URL)
  // convert to json
    .then((response) => response.json())
    // send to reducer
    .then((json) => {
      var items = json.items
      console.log(items)
      return {
        type: YOUTUBE_SEARCH, items
      }
    })
    // catch function errors
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    })
}

export function searchQuery(query) {
  return {
    type: SEARCH_QUERY, query
  }
}
