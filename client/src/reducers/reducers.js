import { combineReducers } from 'redux';
import { YOUTUBE_REQUEST, YOUTUBE_RECEIVE, WOLFRAM_REQUEST, WOLFRAM_RECEIVE, SEARCH_QUERY, ACTIVE_TAB } from '../actions/actions';


function activeTab(state='Youtube', action) {
  switch(action.type) {
    case ACTIVE_TAB:
      return action.tab
    default:
      return state
  }
}

// changes what youtube videos are in the current search results
function youtubeSearch(state={
  isFetching: false,
  results: []
},
  action) {
  switch (action.type) {
    case YOUTUBE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        results: []
      })
    case YOUTUBE_RECEIVE:
    return Object.assign({}, state, {
      isFetching: false,
      results: action.results
    })
    default:
      return state
    }
}

// changes what wolfram alpha results are in the current search results
function wolframSearch(state={
  isFetching: false,
  results: []
},
  action) {
  console.log("Action:", action)
  switch (action.type) {
  case WOLFRAM_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      results: []
    })
  case WOLFRAM_RECEIVE:
  return Object.assign({}, state, {
    isFetching: false,
    results: action.results
  })
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
  youtube: youtubeSearch,
  wolfram: wolframSearch,
  query: searchQuery,
  activeTab: activeTab
})

export default rootReducer
