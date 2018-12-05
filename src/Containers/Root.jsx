// @vendors
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// @components
import Home from 'Containers/HomeContainer'
import Favorites from 'Containers/FavoritesContainer'
import Movie from 'Containers/MovieContainer'

// @actions
import TMDBConfigurationActions from 'module/state/TMDBConfiguration/actions'

const mapStateToProps = (state) => ({
  TMDBConfiguration: state.TMDBConfiguration,
})

const mapDispatchToProps = (dispatch) => ({
  getTMDBConfiguration: () => {
    dispatch(TMDBConfigurationActions.getTMDBConfiguration())
  }
})

class Root extends Component {
  componentDidMount() {
    const {
      TMDBConfiguration,
      getTMDBConfiguration,
    } = this.props

    // only initialize tmdb configuration if
    // it's not initialized and not loading and there is no error
    if (
      !TMDBConfiguration.initialized &&
      !TMDBConfiguration.loading &&
      !TMDBConfiguration.error
    ) {
      getTMDBConfiguration()
    }
  }

  render() {
    const { TMDBConfiguration } = this.props

    // if tmdb configuration is not ready render a loading
    if (TMDBConfiguration.loading || !TMDBConfiguration.initialized) {
      return (
        <p>Loading...</p>
      )
    }

    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
        </div>
      </Router>
    )
  }
}

Root.propTypes = {
  TMDBConfiguration: PropTypes.object.isRequired,
  getTMDBConfiguration: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
