import Movie from 'Components/Pages/Movie/Movie'
import { connect } from 'react-redux'

const selectMovie = (state, ownProps) => {
  const movieID = ownProps.match.params.id
  const movie = state.movies.entities[movieID]

  return movie || {}
}

const mapStateToProps = (state, ownProps) => ({
  movie: selectMovie(state, ownProps)
})

export default connect(
  mapStateToProps,
  null
)(Movie)
