
export const SEARCH_EXERCISES = 'SEARCH_EXERCISES'

export function searchKAExercises(query) {
  return {
    type: SEARCH_EXERCISES,
    query
  }
}
