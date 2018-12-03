// @vendors
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// @components
import Home from 'Containers/HomeContainer'
import Favorites from 'Containers/Favorites'
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
