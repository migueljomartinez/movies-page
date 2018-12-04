import { connect } from 'react-redux'
import Favorites from 'Components/Pages/Favorites/Favorites'
import _map from 'lodash.map'

const selectFavoriteMovies = state => {
  const movies = state.movies.entities
  const { favorites } = state

  const favoriteMovies = _map(favorites, favoriteMovieID => {
    const favoriteMovie = movies[favoriteMovieID]
    return favoriteMovie
  })

  return favoriteMovies
}

const mapStateToProps = state => ({
  favoriteMovies: selectFavoriteMovies(state)
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites)
