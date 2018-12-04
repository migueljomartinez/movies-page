import actionTypes from './favoritesActionTypes'

const initialState = {}

function handleAdd(state, action) {
  const { movie } = action.payload
  return {
    ...state,
    [movie]: movie
  }
}

function handleRemove(state, action) {
  const cloneState = { ...state }
  const { movie } = action.payload
  delete cloneState[movie]

  return cloneState
}

export default function favoriteMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_FAVORITE_MOVIE:
      return handleAdd(state, action)

    case actionTypes.REMOVE_FAVORITE_MOVIE:
      return handleRemove(state, action)

    default:
      return state
  }
}
