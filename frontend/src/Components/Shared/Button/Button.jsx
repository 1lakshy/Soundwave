import React from 'react'
import styles from "./Button.module.css";

function Button({text,onClick}) {
    return (
        <button onClick={onClick} className={styles.button}>
            <span>{text}</span>
            <img style={{ width: 15, height: 10, marginLeft: 5 }} src="/./images/arrow.png" alt="" />
        </button>
    )
}

export default Button