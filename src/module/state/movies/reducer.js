import * as actionTypes from './actionTypes'

const initialState = {
  loading: false,
  results: [],
}

function handleRequestMovieSuccess(state, action) {
  const currentMovies = state.results || []
  const newMovies = action.payload.results
  const filteredNewMovies = newMovies.filter(newMovie => {
    const KEEP = true
    const REMOVE = false
    const isNewMovieAlreadyIn = currentMovies.find(currentMovie => currentMovie.id === newMovie.id)

    return isNewMovieAlreadyIn ? REMOVE : KEEP
  })
  const allMovies = [...currentMovies, ...filteredNewMovies]

  return {
    ...action.payload,
    results: allMovies,
    loading: false,
  }
}

export default function moviesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.REQUESTING_MOVIE:
    case actionTypes.REQUESTING_MOVIES:
      return {
        ...state,
        loading: true,
      }
    
    case actionTypes.REQUEST_MOVIES_SUCCESS:
      return handleRequestMovieSuccess(state, action)

    case actionTypes.REQUEST_MOVIE_FAILURE:
    case actionTypes.REQUEST_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    case actionTypes.REQUEST_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        results: [
          ...state.results,
          action.payload
        ]
      }

    default:
      return state
  }
}
