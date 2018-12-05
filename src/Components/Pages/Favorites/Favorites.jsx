// @vendors
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import _map from 'lodash.map'

// @components
import Card from 'Components/Molecules/Card/Card'
import Video from 'Components/Atoms/Video/Video'

// @styles
import styles from './Favorites.module.sass'

class Favorites extends Component {
  state = {
    isModalOpen: false,
  }

  toggleModal(value) {
    this.setState({ isModalOpen: value })
  }

  handleMovieClick = (e, movie) => {
    const { getMovieVideos, setCurrentMovie } = this.props
    this.toggleModal(true)

    if (getMovieVideos) getMovieVideos(movie)
    setCurrentMovie(movie)
  }

  render() {
    const { favoriteMovies, currentMovieVideos } = this.props
    const { isModalOpen } = this.state

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          Favorites movies
        </h1>
        <div className={styles.cards}>
          {
            _map(favoriteMovies, movie => (
              <div className={styles.cardContainer} key={movie.id}>
                <button className={styles.card} onClick={e => this.handleMovieClick(e, movie)}>
                  <Card
                    data={{
                      title: movie.title,
                      image: movie.complete_image,
                      rating: movie.vote_average,
                      id: movie.id,
                    }}
                  />
                </button>
              </div>
            ))
          }
        </div>
        <Modal isOpen={isModalOpen}>
          <button onClick={() => this.toggleModal(false)}>Close</button>
          <div className={styles.videos}>
            {
              currentMovieVideos.map(video => {
                return (
                  <div className={styles.video} key={video.id}>
                    <Video data={video} />
                  </div>
                )
              })
            }
          </div>
        </Modal>
      </div>
    )
  }
}

Favorites.propTypes = {
  favoriteMovies: PropTypes.array.isRequired,
  currentMovieVideos: PropTypes.array.isRequired,
}

export default Favorites
