import movies from 'module/state/movies/reducer'
import TMDBConfiguration from 'module/state/TMDBConfiguration/reducer'
import favorites from 'module/state/favorites/favoritesReducer'
import videos from 'module/state/videos/videosReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies,
  TMDBConfiguration,
  favorites,
  videos
})

export default rootReducer
