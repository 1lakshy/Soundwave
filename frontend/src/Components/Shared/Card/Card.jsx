import React from 'react'
import styles from "./Card.module.css"
import "../../../App.css"

function Card({ title, icon, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
        <img style={{ width: 40, height: 40 }} src={`/images/${icon}.png`} alt="logo" />
        <h1 className={styles.heading}>{title}</h1>
      </div>
      {children}
    </div>
  )
}

export default Card