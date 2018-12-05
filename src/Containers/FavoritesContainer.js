// @vendors
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Favorites from 'Components/Pages/Favorites/Favorites'
import _map from 'lodash.map'
import _filter from 'lodash.filter'

// @actions
import videosActions from 'module/state/videos/videosActions'

const selectCurrentMovieVideos = (allVideos, currentMovie) => {
  const videos = _filter(allVideos, video => video.movieID === currentMovie)

  return videos
}

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
  favoriteMovies: selectFavoriteMovies(state),
  allVideos: state.videos.entities,
})

const mapDispatchToProps = dispatch => ({
  getMovieVideos: movie => {
    dispatch(videosActions.getMovieVideos(movie.id))
  }
})

class FavoritesContainer extends Component {
  state = {
    currentMovie: '',
  }

  setCurrentMovie = movie => {
    this.setState({ currentMovie: movie.id })
  }

  render() {
    const { allVideos } = this.props
    const { currentMovie } = this.state
    const currentMovieVideos = selectCurrentMovieVideos(allVideos, currentMovie)

    return <Favorites {...this.props} currentMovieVideos={currentMovieVideos} setCurrentMovie={this.setCurrentMovie} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesContainer)
