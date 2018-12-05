import APIInterface from 'module/data/APIInterface'
import actionTypes from './videosActionTypes'

const requestingMovieVideos = () => ({
  type: actionTypes.REQUESTING_MOVIE_VIDEOS
})

const requestMovieVideosSuccess = payload => ({
  type: actionTypes.REQUEST_MOVIE_VIDEOS_SUCCESS,
  payload
})

const requestMovieVideosFailure = error => ({
  type: actionTypes.REQUEST_MOVIE_VIDEOS_FAILURE,
  error
})

/**
 * async action creator (thunk)
 */
const getMovieVideos = movieID => dispatch => {
  dispatch(requestingMovieVideos())
  APIInterface.getMovieVideos(movieID)
    .then(data => {
      const extendedVideos = data.results.reduce((previous, current) => {
        return {
          ...previous,
          [current.id]: {
            ...current,
            movieID,
          }
        }
      }, {})
      dispatch(requestMovieVideosSuccess(extendedVideos))
    })
    .catch(error => {
      dispatch(requestMovieVideosFailure(error))
    })
}

export default {
  getMovieVideos
}
