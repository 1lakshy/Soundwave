import React from 'react'
import styles from "./Card.module.css"
import "../../../App.css"

function Card({ title, icon,num, children }) {
  return (<div className={styles.contCard}>
  
    <div className={styles.card}>
    <div>
      <div className={styles.headingWrapper}>
        <img style={{ width: 50, height: 50 ,marginRight:10}} src={`/images/${icon}.png`} alt="logo" />
        <h1 className={styles.heading}>{title}</h1>
      </div>
      {children}
      </div>


    </div>
{/*     
    <div className={styles.right}>
        <img src={`./images/right${num}.png`} alt="illustration" />
      </div> */}
    </div>
  )
}

export default Card