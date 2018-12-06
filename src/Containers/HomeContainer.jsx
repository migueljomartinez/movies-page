// @vendors
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _map from 'lodash.map'

// @components
import Home from 'Components/Pages/Home/Home'

// @actions
import moviesActions from 'module/state/movies/actions'
import favoritesAction from 'module/state/favorites/favoritesActions'

/**
 * add favorite flag to all movies
 * 
 * @param {object} movies 
 * @param {object} favorites
 * 
 * @return {array} extended movies
 */
const extendMovies = (movies, favorites) => {
  const withFavorites = _map(movies.results, movie => (
    Object.assign({}, movie, {
      favorite: !!favorites[movie.id]
    })
  ))

  return withFavorites
}

const selectMovies = (state, ownProps) => {
  const { movies, favorites } = state
  const extendedMovies = extendMovies(movies, favorites)

  return {
    loading: movies.loading,
    page: movies.page,
    list: extendedMovies,
  }
}

const mapStateToProps = (state, ownProps) => ({
  movies: selectMovies(state, ownProps),
  loading: state.movies.loading,
  TMDBConfiguration: state.TMDBConfiguration,
  hasMoreMovies: true,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestMovies: () => {
    const FIRST_PAGE = 1
    dispatch(moviesActions.getMovies(FIRST_PAGE))
  },
  likeMovie: (event, movie) => {
    event.stopPropagation()
    event.preventDefault()

    if (movie.favorite) {
      dispatch(favoritesAction.removeFavoriteMovie(movie.id))
    } else {
      dispatch(favoritesAction.addFavoriteMovie(movie.id))
    }
  },
  loadMoreMovies: (page, loading) => {
    if (loading || page === undefined) return

    dispatch(moviesActions.getMovies(page + 1))
  },
})

class HomeContainer extends Component {
  componentDidMount() {
    this.handleMovies()
  }

  handleMovies() {
    const { requestMovies } = this.props

    requestMovies()
  }

  render() {
    const { ...rest } = this.props

    return (
      <Home {...rest} />
    )
  }
}

HomeContainer.propTypes = {
  TMDBConfiguration: PropTypes.object.isRequired,
  requestMovies: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
