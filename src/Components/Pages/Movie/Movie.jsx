import React from 'react'

// TODO: renderizar película correctamente y
// obtenerla cuando el usuario llegue a la página directamente

const Movie = ({ movie }) => {
  return (
    <div>
      <h1>
        Movie
      </h1>
      <p>
        {JSON.stringify(movie)}
      </p>
    </div>
  )
}

export default Movie
