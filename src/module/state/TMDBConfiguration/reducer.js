import actionTypes from './actionTypes'

const initialState =  {
  initialized: false
}

export default function TMDBConriguration(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.REQUEST_CONFIGURATION:
      return {
        ...state,
        loading: true,
      }

    case actionTypes.REQUEST_CONFIGURATION_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        initialized: true,
      }

    case actionTypes.REQUEST_CONFIGURATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state
  }
}
