import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Home from 'Components/Pages/Home/Home'
import moviesActions from 'module/state/movies/actions'

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    TMDBConfiguration: state.TMDBConfiguration
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestMovies: () => {
      dispatch(moviesActions.getMovies())
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
