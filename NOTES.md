link - movies-page-miguel.surge.sh

* Used Libraries/Tools
    - NPM
    - React
        - create-react-app
        - react-modal
        - react-infinite-scroller
        - react-router
        - react-redux
    - redux
        - redux-thunk
        - redux-logger
    - lodash

* Architecture
    - Atomic, Container & Dumb components
    - CSS modules
    - Redux

* Optimisations you took along the way
    - dont repeat state in the redux store
    - save the local state in local storage
    - 

* Proyect architecture
|-- ROOT
    |-- .editorconfig
    |-- .env
    |-- .gitignore
    |-- NOTES.md
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- manifest.json
    |-- src
        |-- App.jsx
        |-- App.test.js
        |-- index.js
        |-- serviceWorker.js
        |-- Components
        |   |-- Atoms
        |   |   |-- Icon
        |   |   |   |-- Icon.jsx
        |   |   |-- Select
        |   |   |   |-- Select.jsx
        |   |   |   |-- Select.module.sass
        |   |   |-- Video
        |   |       |-- Video.jsx
        |   |       |-- Video.module.sass
        |   |-- Molecules
        |   |   |-- Card
        |   |       |-- Card.jsx
        |   |       |-- Card.module.sass
        |   |-- Organisms
        |   |-- Pages
        |       |-- Favorites
        |       |   |-- Favorites.jsx
        |       |   |-- Favorites.module.sass
        |       |-- Home
        |       |   |-- Home.jsx
        |       |   |-- Home.module.sass
        |       |-- Movie
        |           |-- Movie.jsx
        |           |-- Movie.module.sass
        |-- Containers
        |   |-- FavoritesContainer.jsx
        |   |-- HomeContainer.jsx
        |   |-- MovieContainer.js
        |   |-- Root.jsx
        |-- module
        |   |-- data
        |   |   |-- APIInterface.js
        |   |   |-- urls.js
        |   |-- state
        |       |-- configureStore.js
        |       |-- rootReducer.js
        |       |-- favorites
        |       |   |-- favoritesActions.js
        |       |   |-- favoritesActionTypes.js
        |       |   |-- favoritesReducer.js
        |       |-- movies
        |       |   |-- actions.js
        |       |   |-- actionTypes.js
        |       |   |-- reducer.js
        |       |-- TMDBConfiguration
        |       |   |-- actions.js
        |       |   |-- actionTypes.js
        |       |   |-- reducer.js
        |       |-- videos
        |           |-- videosActions.js
        |           |-- videosActionTypes.js
        |           |-- videosReducer.js
        |-- styles
            |-- index.sass
            |-- _normalize.scss
