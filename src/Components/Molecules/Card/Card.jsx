import React, { Component } from 'react'
import styles from './Card.module.sass'

class Card extends Component {
  handleLike = (e) => {
    const { onLike, data } = this.props

    if (onLike) onLike(e, data)
  }

  render() {
    const { image, title, rating, favorite } = this.props.data

    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={image} alt={title} style={{ objectFit: 'cover', width:"100%", height: "100%" }} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.rating}>{rating}</p>
          <button onClick={this.handleLike}>
            { favorite ? 'Unlike' : 'Like' }
          </button>
        </div>
      </div>
    )
  }
}

export default Card
