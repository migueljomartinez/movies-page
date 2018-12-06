// @vendors
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Favorites from 'Components/Pages/Favorites/Favorites'
import _map from 'lodash.map'
import _filter from 'lodash.filter'

// @actions
import videosActions from 'module/state/videos/videosActions'

/**
 * Filter all videos by the current movie in order to only show the videos for the current movie
 * 
 * @param  {object} allVideos
 * @param  {number|string} currentMovie id of a movie
 * 
 * @return {array} array of videos filtered by the current movie
 */
const selectCurrentMovieVideos = (allVideos, currentMovie) => {
  const videos = _filter(allVideos, video => video.movieID === currentMovie)

  return videos
}

/**
 * Get only favorite movies from all the movies
 * 
 * @param  {object} favorites
 * @param  {string|object} favoriteMovieID
 * 
 * @return {array} favorite movies
 */
const selectFavoriteMovies = state => {
  const movies = state.movies.results
  const { favorites } = state

  const favoriteMovies = _map(favorites, favoriteMovieID => {
    const favoriteMovie = movies.find(movie => movie.id === favoriteMovieID)
    return favoriteMovie
  }).filter(favoritMovie => !!favoritMovie)

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

    return (
      <Favorites
        {...this.props}
        currentMovieVideos={currentMovieVideos}
        setCurrentMovie={this.setCurrentMovie}
      />
    )
  }
}

FavoritesContainer.propTypes = {
  favoriteMovies: PropTypes.array.isRequired,
  allVideos: PropTypes.object.isRequired,
  getMovieVideos: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesContainer)
