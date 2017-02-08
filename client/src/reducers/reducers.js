import { combineReducers } from 'redux';
import { SEARCH_EXERCISES } from '../actions/actions';

function searchKAExercises(state = 'reactjs', action) {
  switch (action.type) {
  case SEARCH_EXERCISES:
    return action.query
  default:
    return state
  }
}

const rootReducer = combineReducers({
  searchKAExercises
})

export default rootReducer
