import APIInterface from 'module/data/APIInterface'
import * as actionTypes from './actionTypes'

/**
 * Create a complete and valid url image
 * @param  {string} path - the path of a image
 * @param  {string} size - the size of the image
 * @param  {object} TMDBConfiguration - the configuration that have the rest of the url
 * @return {string} a complete url image source
 */
function getCompleteImage(path, size, TMDBConfiguration) {
  const imageBaseUrl = TMDBConfiguration.images.base_url

  return `${imageBaseUrl}${size}${path}`
}

/**
 * Format movies to a more stardard way and adding the complete image to each movie object
 * @param  {array} movies - movies
 * @param  {object} TMDBConfiguration - object with the necessary data to create a complete image url
 * @return {array} formatted movies 
 */
function formatMoviesData(movies, TMDBConfiguration) {
  const W_342 = 3
  const imageSize = TMDBConfiguration.images.poster_sizes[W_342]
  const moviesWithCompleteImage = movies.results
    .reduce((previousValue, currentValue) => {
      return {
        ...previousValue,
        [currentValue.id]: {
          ...currentValue,
          complete_image: getCompleteImage(currentValue.poster_path, imageSize, TMDBConfiguration)
        }
      }
    }, {})

  delete movies.results

  return {
    ...movies,
    entities: moviesWithCompleteImage,
  }
}
/**
 * Add complete image url to the movies objects
 * @param  {string} movie
 * @param  {string} TMDBConfiguration - object with the necessary data to create a complete image url
 */
function formatMovieData(movie, TMDBConfiguration) {
  const W_342 = 3
  const imageSize = TMDBConfiguration.images.poster_sizes[W_342]
  const formattedMovie = Object.assign({}, movie, {
    complete_image: getCompleteImage(movie.poster_path, imageSize, TMDBConfiguration)
  })

  return formattedMovie
}

// @action creators
function requestingMovies() {
  return {
    type: actionTypes.REQUESTING_MOVIES,
  }
}

function requestMoviesFailure(error) {
  return {
    type: actionTypes.REQUEST_MOVIES_FAILURE,
    error,
  }
}

function requestMoviesSuccess(payload) {
  return {
    type: actionTypes.REQUEST_MOVIES_SUCCESS,
    payload,
  }
}

/**
 * Async action creator (thunk)
 */
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

function requestMovie() {
  return {
    type: actionTypes.REQUESTING_MOVIE,
  }
}

function requestMovieFailure(error) {
  return {
    type: actionTypes.REQUEST_MOVIE_FAILURE,
    error,
  }
}

function requestMovieSuccess(payload) {
  return {
    type: actionTypes.REQUEST_MOVIE_SUCCESS,
    payload,
  }
}

/**
 * Async action creator (thunk)
 */
function getMovie(movieID) {
  return (dispatch, getState) => {
    const state = getState()

    dispatch(requestMovie())

    APIInterface.getMovie(movieID)
      .then(movie => {
        const formattedMovie = formatMovieData(movie, state.TMDBConfiguration)
        dispatch(requestMovieSuccess(formattedMovie))
      })
      .catch(error => {
        dispatch(requestMovieFailure(error))
      })
  }
}

export default {
  getMovies,
  getMovie
}
