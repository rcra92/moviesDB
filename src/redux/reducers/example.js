import * as types from '../types/example'

const initialState = {
  example: null,
  loading: false,
  movies: [],
  error: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_EXAMPLE: {
      const { id, content } = action.payload
      return {
        ...state,
        example: 'UHUUU!',
      }
    }
    case types.ACTIVE_LOADING: {
      return { ...state, loading: true }
    }
    case types.SEARCH_MOVIES_SUCCESS: {
      const { results } = action.payload
      return { ...state, movies: results, loading: false }
    }
    case types.SEARCH_MOVIES_FAILURE: {
      console.log('>>>>>', action)
      return { ...state, loading: false }
    }
    default:
      return state
  }
}
