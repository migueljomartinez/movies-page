import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Home from 'Components/Pages/Home/Home'
import moviesActions from 'module/state/movies/actions'
import TMDBConfigurationActions from 'module/state/TMDBConfiguration/actions'

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
    },
    getTMDBConfiguration: () => {
      dispatch(TMDBConfigurationActions.getTMDBConfiguration())
    }
  }
}

class HomeContainer extends Component {
  componentDidMount() {
    this.handleMovies()
  }

  componentDidUpdate() {
    this.handleMovies()
  }

  handleMovies() {
    const {
      TMDBConfiguration,
      requestMovies,
      getTMDBConfiguration,
      movies
    } = this.props

    if (TMDBConfiguration.initialized && movies.results.length === 0 && !movies.loading) {
      requestMovies()
    } else if (!TMDBConfiguration.initialized && !TMDBConfiguration.loading) {
      getTMDBConfiguration()
    }
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
