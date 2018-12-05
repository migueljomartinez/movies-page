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

const extendMovies = (movies, favorites) => {
  const withFavorites = _map(movies.entities, movie => {
    return Object.assign({}, movie, {
      favorite: !!favorites[movie.id]
    })
  })

  return withFavorites
}

const mapStateToProps = state => {
  const { movies, favorites } = state
  const moviesWithFavorite = extendMovies(movies, favorites)

  return {
    movies: moviesWithFavorite,
    TMDBConfiguration: state.TMDBConfiguration
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestMovies: () => {
      dispatch(moviesActions.getMovies())
    },
    likeMovie: (event, movie) => {
      event.stopPropagation()
      event.preventDefault()

      if (movie.favorite) {
        dispatch(favoritesAction.removeFavoriteMovie(movie.id))
      } else {
        dispatch(favoritesAction.addFavoriteMovie(movie.id))
      }

    }
  }
}

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
  requestMovies: PropTypes.func.isRequired,
  getTMDBConfiguration: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
