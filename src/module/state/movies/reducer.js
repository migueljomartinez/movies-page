import * as actionTypes from './actionTypes'

const initialState = {
  movies: {}
}

export default function moviesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.REQUESTING_MOVIES:
      return state
    
    case actionTypes.REQUEST_MOVIES_SUCCESS:
      return {
        ...action.payload
      }
    
    case actionTypes.REQUEST_MOVIES_FAILURE:
      return {
        ...state,
        error: action.error,
      }

    default:
      return state
  }
}
