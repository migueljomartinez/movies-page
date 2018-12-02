const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '8a7a869ec35fe43b1d9ba1ea1b82765c'

export default {
  movies: `${BASE_URL}movie/popular?api_key=${API_KEY}`,
  tmdbConfiguration: `${BASE_URL}configuration?api_key=${API_KEY}`
}
