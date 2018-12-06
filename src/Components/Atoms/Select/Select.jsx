import React from 'react'
import styles from './Select.module.sass'

const Select = ({}) => {
  return (
    <div className={styles.container}>
      <label for="filter-cards" className={styles.label}>
        Filter cards:
      </label>
      <select id="filter-cards" className={styles.select}>
        <option value="none">none</option>
        <option value="date">By date</option>
      </select>
    </div>
  )
}

export default Select
