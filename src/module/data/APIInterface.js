import urls from './urls'

function fetchHelper(url, { method = 'GET', body = null } = {}) {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body,
  }).then(response => response.json())
}

/**
 * Get all movies
 */
function getMovies() {
  return fetchHelper(urls.movies())
}

/**
 * Get tmdb configuration needed to create the complete url images
 */
function getTMDBConfiguration() {
  return fetchHelper(urls.tmdbConfiguration())
}

/**
 * Get just one movie
 */
function getMovie(movieID) {
  return fetchHelper(urls.movie(movieID))
}

/**
 * Get videos of a specific movie
 */
function getMovieVideos(movieID) {
  return fetchHelper(urls.videos(movieID))
}

export default {
  getMovies,
  getTMDBConfiguration,
  getMovie,
  getMovieVideos,
}
