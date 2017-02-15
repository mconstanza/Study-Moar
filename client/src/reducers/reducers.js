import { combineReducers } from 'redux';
import { LOGGED_IN, SET_USER, SET_HISTORY, ADD_HISTORY, YOUTUBE_REQUEST, YOUTUBE_RECEIVE, WOLFRAM_REQUEST, WOLFRAM_RECEIVE, QUIZLET_REQUEST, QUIZLET_RECEIVE, SEARCH_QUERY, ACTIVE_TAB } from '../actions/actions';


function activeTab(state='Home', action) {
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

// changes what quizlet sets are in the current search results
function quizletSearch(state={
  isFetching: false,
  results: []
},
  action) {
  switch (action.type) {
    case QUIZLET_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        results: []
      })
    case QUIZLET_RECEIVE:
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

// DEV ONLY!!!!!=================================
var testUser = {
  "_id": {
       "$oid": "589f9ac03403a730109ac615"
   },
   "local": {
       "password": "$2a$08$0Qgl3ktQY1XUHzgbKpnewe4IKI8QeeZZQH3mzOJIFf4Vn6KEukrMy",
       "email": "michael.constanza@gmail.com"
     },
     history: [{query: "spongebob", date: Date.now()}]
}
//============================================

function setUser(state=false, action) {
  switch(action.type) {
    case SET_USER:
      return action.user
    default:
      return state
  }
}

function isLoggedIn(state=false, action) {
  switch(action.type) {
    case SET_USER:
      return action.isLoggedIn
    default:
      return state
    }
}

function setHistory(state=[], action) {
  switch (action.type) {
    case SET_HISTORY:
      return action.history
    case ADD_HISTORY:
        return [
          ...state,
          action.entry
        ]

    default:
      return state
  }
}

// This controls the shape of the state object!
const rootReducer = combineReducers({
  youtube: youtubeSearch,
  wolfram: wolframSearch,
  quizlet: quizletSearch,
  query: searchQuery,
  activeTab: activeTab,
  user: setUser,
  isLoggedIn: isLoggedIn,
  history: setHistory
})

export default rootReducer
