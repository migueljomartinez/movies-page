import movies from 'module/state/movies/reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies
})

export default rootReducer
