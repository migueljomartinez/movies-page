import React from 'react'
import styles from './Movie.module.sass'

const Movie = ({ movie }) => {
  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <img className={styles.image} src={movie.complete_image} alt={movie.title} />
      </figure>
      <p className={styles.description}>
        {movie.overview}
      </p>
      <p className={styles.year}>
        {movie.release_date}
      </p>
      <p className={styles.rating}>
        {movie.vote_average}
      </p>
    </div>
  )
}

export default Movie
