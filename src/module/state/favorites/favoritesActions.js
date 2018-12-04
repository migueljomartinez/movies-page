import actionTypes from './favoritesActionTypes'

const addFavoriteMovie = (movie) => ({
  type: actionTypes.ADD_FAVORITE_MOVIE,
  payload: { movie }
})

const removeFavoriteMovie = (movie) => ({
  type: actionTypes.REMOVE_FAVORITE_MOVIE,
  payload: { movie }
})


export default {
  addFavoriteMovie,
  removeFavoriteMovie,
}
