import * as types from '../types/example'
import _ from 'lodash'

const initialState = {
  example: null,
  loading: false,
  movies: [[]],
  totalPages: 0,
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
      const { results, total_results, total_pages } = action.payload
      const paginated = _.chunk(results, 5)
      let totalPages = Math.round(total_results / 5)
      return {
        ...state,
        movies: paginated,
        totalPages: totalPages,
        loading: false,
      }
    }
    case types.SEARCH_MOVIES_FAILURE: {
      console.log('>>>>>', action)
      return { ...state, loading: false }
    }
    default:
      return state
  }
}
