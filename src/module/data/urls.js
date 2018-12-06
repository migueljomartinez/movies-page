const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '8a7a869ec35fe43b1d9ba1ea1b82765c'

const movies = page => `${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`
const movie = id => `${BASE_URL}movie/${id}?api_key=${API_KEY}`
const tmdbConfiguration = () => `${BASE_URL}configuration?api_key=${API_KEY}`
const videos = (movieID) => `${BASE_URL}movie/${movieID}/videos?api_key=${API_KEY}`

export default {
  movies,
  movie,
  tmdbConfiguration,
  videos
}
