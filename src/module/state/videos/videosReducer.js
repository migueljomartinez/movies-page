import actionTypes from './videosActionTypes'

const initialState = {
  entities: {},
  loading: false,
}

export default function videosReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUESTING_MOVIE_VIDEOS:
      return {
        ...state,
        loading: true
      }

    case actionTypes.REQUEST_MOVIE_VIDEOS_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          ...action.payload
        },
        loading: false
      }
    
    case actionTypes.REQUEST_MOVIE_VIDEOS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      }

    default:
      return state
  }
}
