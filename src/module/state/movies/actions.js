import APIInterface from 'module/data/APIInterface'
import * as types from './actionTypes'

// @helpers
function formatMoviesData(movies, TMDBConfiguration) {
  console.log('movies', movies)
  console.log('TMDBConfiguration', TMDBConfiguration)
  const imageBaseUrl = TMDBConfiguration.images.base_url
  const imageSize = TMDBConfiguration.images.poster_sizes[4]

  const moviesWithCompleteImage = movies.results.map(movie => {
    return {
      ...movie,
      complete_image: `${imageBaseUrl}${imageSize}/${movie.poster_path}`
    }
  })

  return {
    ...movies,
    results: moviesWithCompleteImage,
  }
}

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
  return (dispatch, getState) => {
    const state = getState()
    dispatch(requestingMovies())

    APIInterface.getMovies()
      .then(data => {
        const formattedData = formatMoviesData(data, state.TMDBConfiguration)

        dispatch(requestMoviesSuccess(formattedData))
      })
      .catch(error => {
        dispatch(requestMoviesFailure(error))
      })
  }
}

export default {
  getMovies
}
