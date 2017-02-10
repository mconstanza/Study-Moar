import { combineReducers } from 'redux';
import { YOUTUBE_SEARCH, SEARCH_QUERY } from '../actions/actions';


// changes what youtube videos are in the current search results
function youtubeSearch(state=[], action) {
  console.log("Action:", action)
  switch (action.type) {
  case YOUTUBE_SEARCH:
    return action.items
  default:
    return state
  }
}

// changes the state of the current search term in the search bar
function searchQuery(state='', action) {
  switch(action.type) {
    case SEARCH_QUERY:
      return action.query

    default:
      return state
  }
}

// This controls the shape of the state object!
const rootReducer = combineReducers({
  youtubeResults: youtubeSearch,
  query: searchQuery
})

export default rootReducer
