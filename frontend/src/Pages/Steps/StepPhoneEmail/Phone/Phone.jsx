import React, { useState } from 'react';
import Card from '../../../../Components/Shared/Card/Card.jsx';
import Button from '../../../../Components/Shared/Button/Button.jsx';
import styles from './Phone.module.css';
import TextInput from '../../../../Components/Shared/TextInput/TextInput.jsx';
import StepPhoneEmail from '../../StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../../StepOtp/StepOtp';
import { activatePass, sendOtp, authGoogle } from '../../../../http/index.js';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../../store/authSlice.js';

function Phone({ onNext }) {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');

  function google() {
    window.open('http://localhost:5500/auth/google', '_self');

    // try {
    //   const { data } = await activatePass();
    //   console.log(data)
    //   if(data.auth){

    //       dispatch(setAuth(data))
    //   }

    // } catch (err) {
    //   console.log(err)
    // }
  }

  return (
    <Card className={styles.card} title="Let's begin" icon="telephone" num="2">
      <div className={styles.belowCard}>
        <div className={styles.social}>
          <img src="./images/social-media.png" alt="social-media" />
        </div>
        <div className={styles.authCont}>
          <div
            className={`${styles.authBox} ${styles.google}`}
            onClick={google}
          >
            <img
              src="./images/google-transparent.png"
              width="40"
              height="40"
              alt="google"
            />

            <h3>Google</h3>
          </div>
          <div className={`${styles.authBox} ${styles.facebook}`}>
            <img
              src="./images/linkden-transparent.png"
              width="40"
              height="40"
              alt="facebook"
            />
            <h3>linkden</h3>
          </div>
          <div className={`${styles.authBox} ${styles.github}`}>
            <img
              src="./images/github-transparent.png"
              width="40"
              height="40"
              alt="github"
            />
            <h3>Github</h3>
          </div>

          <div className={styles.btn}>
            <Button text="Next" onClick={onNext} />
          </div>
        </div>
      </div>

      {/* <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

      <div>
        <div className={styles.actionButtonWrap}>
        <Button text="Next" onClick={onNext} />
        </div>
      </div>
      <p className={styles.bottomParagraph}>
        Please enter your mobile number <br /> to get otp 
  </p>*/}
    </Card>
  );
}

export default Phone;
