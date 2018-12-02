import React from 'react'
import styles from './Card.module.sass'

const Card = ({ image, title, rating }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.rating}>{rating}</p>
      </div>
    </div>
  )
}

export default Card
