import { connect } from 'react-redux'
import Home from 'Components/Pages/Home/Home'
import actions from 'module/state/movies/actions'

const mapStateToProps = (state) => {
  return {
    movies: state.movies.results || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestMovies: () => {
      dispatch(actions.getMovies())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
