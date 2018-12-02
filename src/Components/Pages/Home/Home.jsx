import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from 'Components/Molecules/Card/Card'
import styles from './Home.module.sass'

class Home extends Component {
  render() {
    const { movies } = this.props
  
    return (
      <div className={styles.container}>
        <h1>Movies</h1>
        <div className={styles.cards}>
          {
            movies.results.map(movie => (
              <div className={styles.card} key={movie.id}>
                <Card
                  title={movie.title}
                  image={movie.complete_image}
                  rating={movie.vote_average}
                />
              </div>
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
