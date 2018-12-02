import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from 'Components/Molecules/Card/Card'
import styles from './Home.module.sass'

class Home extends Component {
  componentDidMount() {
    this.props.requestMovies()
  }

  render() {
    const { movies } = this.props

    return (
      <div className={styles.container}>
        <h1>Movies</h1>
        <div className={styles.cards}>
          {
            movies.map(movie => (
              <div className={styles.card}>
                <Card
                  title={movie.title}
                  image="https://source.unsplash.com/random/240x250"
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
  movies: PropTypes.array.isRequired,
  requestMovies: PropTypes.func.isRequired
}

export default Home
