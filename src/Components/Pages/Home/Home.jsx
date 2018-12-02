import React from 'react'
import Card from 'Components/Molecules/Card/Card'
import styles from './Home.module.sass'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Movies</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
        <div className={styles.card}>
          <Card title="title" image="https://source.unsplash.com/random/240x250" rating={50} />
        </div>
      </div>
    </div>
  )
}

export default Home
