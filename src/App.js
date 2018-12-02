// @vendors
import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// @components
import Home from 'Containers/HomeContainer'
import Favorites from 'Containers/Favorites'

// @others
import configureStore from 'module/state/configureStore'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" component={Favorites} />
      </div>
    </Router>
  </Provider>
)

export default App
