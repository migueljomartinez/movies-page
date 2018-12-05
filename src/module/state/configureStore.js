// @vendors
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

// @root reducer
import rootReducer from 'module/state/rootReducer'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export default function configureStore() {
  // get saved state from localstorage to hydrate the store
  const initialState = JSON.parse(localStorage.getItem('state')) || {}
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

  store.subscribe(() => {
    const state = store.getState()
    const serializedState = JSON.stringify(state)

    // save the app state into localstorage to hydrate the app after reloading
    window.localStorage.setItem('state', serializedState)
  })

  return store
}
