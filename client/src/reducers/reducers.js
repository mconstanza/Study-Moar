import { combineReducers } from 'redux';
import { SEARCH_EXERCISES, SEARCH_QUERY } from '../actions/actions';

function KAExercises(state ='', action) {
  switch (action.type) {
  case SEARCH_EXERCISES:
    return action.query
  default:
    return state
  }
}

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
  query: searchQuery
})

export default rootReducer
