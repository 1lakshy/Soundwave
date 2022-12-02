import React from 'react';
import styles from './featureCard.module.css';

function featureCard(props) {
  return (
    <div className={styles.featureCont}>
      <div className={styles.leftCont}>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>

        <div className={styles.bottomBox}></div>
      </div>
      <div className={styles.rightCont}>
        {/* <img src={props.featureImg} alt="" /> */}
        <img
          src="https://i.pinimg.com/736x/3d/96/eb/3d96eba59a324ac1570e174fd5bb5e94.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default featureCard;
