// @vendors
import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// @components
import Card from 'Components/Molecules/Card/Card'
import styles from './Home.module.sass'
import _map from 'lodash.map'

const MovieList = ({ movies, likeMovie }) => (
  _map(movies, movie => (
    <div className={styles.cardContainer} key={movie.id}>
      <Link to={`/movie/${movie.id}`} className={styles.card} key={movie.id}>
        <Card
          data={{
            title: movie.title,
            image: movie.complete_image,
            rating: movie.vote_average,
            id: movie.id,
            favorite: movie.favorite,
          }}
          onLike={likeMovie}
        />
      </Link>
    </div>
  ))
)

class Home extends Component {
  render() {
    const { movies, likeMovie, loadMoreMovies, hasMoreMovies } = this.props
    const loader = (
      <p key="infinite-loader">Loading...</p>
    )

    return (
      <div className={styles.container}>
        <h1>Movies</h1>
        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            <li className={styles.navigationItem}>
              <Link to="/favorites">Favorites movies</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.filterContainer}>
          <h3>Filter</h3>
          <Link to="/">All</Link>{' --- '}
          <Link to="/?filter=date">By date</Link>
        </div>
        <InfiniteScroll
          pageStart={0}
          loadMore={() => loadMoreMovies(movies.page, movies.loading)}
          hasMore={hasMoreMovies}
          loader={loader}
          className={styles.cards}
        >
          <MovieList movies={movies.list} likeMovie={likeMovie} key="infinite-cards" />
        </InfiniteScroll>
      </div>
    )
  }
}

Home.propTypes = {
  movies: PropTypes.shape({
    list: PropTypes.array.isRequired,
    page: PropTypes.number,
    loading: PropTypes.bool.isRequired,
  }),
  likeMovie: PropTypes.func.isRequired,
}

export default Home
