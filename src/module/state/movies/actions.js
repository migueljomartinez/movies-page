import APIInterface from 'module/data/APIInterface'
import * as types from './actionTypes'

function requestingMovies() {
  return {
    type: types.REQUESTING_MOVIES
  }
}

function requestMoviesFailure(error) {
  return {
    type: types.REQUEST_MOVIES_FAILURE,
    error
  }
}

function requestMoviesSuccess(payload) {
  return {
    type: types.REQUEST_MOVIES_SUCCESS,
    payload
  }
}

function getMovies() {
  return (dispatch, _getState) => {
    dispatch(requestingMovies())

    APIInterface.getMovies()
      .then(data => {
        dispatch(requestMoviesSuccess(data))
      })
      .catch(error => {
        dispatch(requestMoviesFailure(error))
      })
  }
}

export default {
  getMovies
}
