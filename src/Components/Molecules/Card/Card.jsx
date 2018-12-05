import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.sass'

class Card extends Component {
  handleLike = (e) => {
    const { onLike, data } = this.props

    if (onLike) onLike(e, data)
  }

  render() {
    const { onLike } = this.props
    const { data } = this.props
    const { image, title, rating, favorite } = data

    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={image} alt={title} style={{ objectFit: 'cover', width:"100%", height: "100%" }} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.rating}>
            Rating: {rating}
          </p>
          {
            onLike && (
              <button onClick={this.handleLike}>
                { favorite ? 'Unlike' : 'Like' }
              </button>
            )
          }
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    favorite: PropTypes.bool,
  }).isRequired,
  onLike: PropTypes.func,
}

export default Card
