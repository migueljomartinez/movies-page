// @vendors
import React from 'react'
import PropTypes from 'prop-types'

// @styles
import styles from './Movie.module.sass'

const Movie = ({ movie }) => {
  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <img className={styles.image} src={movie.complete_image} alt={movie.title} />
      </figure>
      <h2 className={styles.title}>{movie.title}</h2>
      <p className={styles.description}>
        {movie.overview}
      </p>
      <p className={styles.year}>
        release date: <strong>{movie.release_date}</strong>
      </p>
      <p className={styles.rating}>
        rating: <strong>{movie.vote_average}</strong>
      </p>
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    complete_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired
}

export default Movie
