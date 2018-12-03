import * as actionTypes from './actionTypes'

const initialState = {
  loading: false,
  entities: {},
}

export default function moviesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.REQUESTING_MOVIES:
      return {
        ...state,
        loading: true,
      }
    
    case actionTypes.REQUEST_MOVIES_SUCCESS:
      return {
        ...action.payload,
        loading: false,
      }

    case actionTypes.REQUEST_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
