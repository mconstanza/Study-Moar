
export const SEARCH_EXERCISES = 'SEARCH_EXERCISES';
export const SEARCH_QUERY = 'SEARCH_QUERY';

export function fetchKAExercises(query) {
  
  return {
    type: SEARCH_EXERCISES, query
  }
}

export function searchQuery(query) {
  return {
    type: SEARCH_QUERY, query
  }
}
