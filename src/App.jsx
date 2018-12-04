// @vendors
import React from 'react'
import { Provider } from 'react-redux'

// @others
import configureStore from 'module/state/configureStore'

// @components
import Root from 'Containers/Root'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
)

export default App
