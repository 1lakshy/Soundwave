import React from 'react'
import styles from "./Button.module.css";

function Button({text,onClick}) {
    return (
        <button onClick={onClick} className={styles.button}>

            <span style={{ textAlign:"center"}}>{text}</span>
            <img src="/images/button.png" alt="" style={{ height: 30 , width : 50}}/>
            {/* <img style={{ width: 15, height: 10, marginLeft: 5 }} src="/./images/arrow.png" alt="" /> */}
        </button>
    )
}

export default Button