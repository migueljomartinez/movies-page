// @vendors
import React from 'react'
import _map from 'lodash.map'

// @components
import Card from 'Components/Molecules/Card/Card'

// @styles
import styles from './Favorites.module.sass'

const Favorites = ({ favoriteMovies }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Favorites movies
      </h1>
      <div className={styles.cards}>
        {
          _map(favoriteMovies, movie => (
            <div className={styles.card} key={movie.id}>
              <Card
                data={{
                  title: movie.title,
                  image: movie.complete_image,
                  rating: movie.vote_average,
                  id: movie.id,
                }}
                key={movie.id}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Favorites
