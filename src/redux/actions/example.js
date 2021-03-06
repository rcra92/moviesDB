import Api from '../../services/movieDb'

import * as types from '../types/example'

export const changeExample = () => ({
  type: types.CHANGE_EXAMPLE,
  payload: {
    example: 'example',
  },
})

export const searchMovies = (params = {}) => dispatch => {
  if (!params.query) return
  dispatch({ type: types.ACTIVE_LOADING })
  Api.searchMovies(params)
    .then(response => {
      dispatch({ type: types.SEARCH_MOVIES_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({
        type: types.SEARCH_MOVIES_FAILURE,
        error: 'Unexpected Error!!!',
      })
    })
}
