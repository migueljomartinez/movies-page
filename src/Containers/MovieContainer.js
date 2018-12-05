// @vendors
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Movie from 'Components/Pages/Movie/Movie'
import { connect } from 'react-redux'

// @actions
import moviesActions from 'module/state/movies/actions'

const selectMovie = (state, ownProps) => {
  const movieID = ownProps.match.params.id
  const movie = state.movies.entities[movieID]

  return movie
}

const mapStateToProps = (state, ownProps) => ({
  movie: selectMovie(state, ownProps)
})

const mapDispatchToProps = (dispatch) => ({
  getMovie: (id) => {
    dispatch(moviesActions.getMovie(id))
  }
})

class MovieContainer extends Component {
  componentDidMount() {
    const { getMovie, match, movie } = this.props
    const movieID = match.params.id

    if (!movie) getMovie(movieID)
  }

  render() {
    const { movie } = this.props

    if (!movie) {
      return (
        <p>Loading...</p>
      )
    }

    return (
      <Movie {...this.props} />
    )
  }
}

MovieContainer.propTypes = {
  getMovie: PropTypes.func.isRequired,
  movie: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer)
