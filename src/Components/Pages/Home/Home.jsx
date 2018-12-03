// @vendors
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// @components
import Card from 'Components/Molecules/Card/Card'
import styles from './Home.module.sass'
import _map from 'lodash.map'

class Home extends Component {
  render() {
    const { movies } = this.props

    return (
      <div className={styles.container}>
        <h1>Movies</h1>
        <div className={styles.cards}>
        {
          _map(movies.entities, movie => (
            <Link to={`/movie/${movie.id}`} className={styles.card} key={movie.id}>
              <Card
                title={movie.title}
                image={movie.complete_image}
                rating={movie.vote_average}
              />
            </Link>
          ))
        }
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  movies: PropTypes.object.isRequired,
}

export default Home
