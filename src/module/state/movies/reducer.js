import * as actionTypes from './actionTypes'

const initialState = {
  loading: false,
  entities: {},
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
      return {
        ...action.payload,
        loading: false,
      }

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
        entities: {
          ...state.entities,
          [action.payload.id]: action.payload
        }
      }

    default:
      return state
  }
}
