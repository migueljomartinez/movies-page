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

function getMovies() {
  return fetchHelper(urls.movies())
}

function getTMDBConfiguration() {
  return fetchHelper(urls.tmdbConfiguration())
}

function getMovie(movieID) {
  return fetchHelper(urls.movie(movieID))
}

export default {
  getMovies,
  getTMDBConfiguration,
  getMovie,
}
