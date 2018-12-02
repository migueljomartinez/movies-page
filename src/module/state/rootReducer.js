import movies from 'module/state/movies/reducer'
import TMDBConfiguration from 'module/state/TMDBConfiguration/reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies,
  TMDBConfiguration,
})

export default rootReducer
