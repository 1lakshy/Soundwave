import React, { useState } from 'react'
import Card from "../../../../Components/Shared/Card/Card.jsx"
import Button from "../../../../Components/Shared/Button/Button.jsx"
import styles from "../StepPhoneEmail.module.css"
import TextInput from '../../../../Components/Shared/TextInput/TextInput.jsx'
import StepPhoneEmail from '../../StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../../StepOtp/StepOtp';
import { sendOtp } from "../../../../http/index.js"
import {useDispatch} from "react-redux"

function Phone({onNext}) {

  const [phoneNumber, setPhoneNumber] = useState("");



  return (
    <Card style={styles.card} title="Enter Your PhoneNumber" icon="telephone">

      <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

      <div>
        <div className={styles.actionButtonWrap}>
        <Button text="Next" onClick={onNext} />
        </div>
      </div>
      <p className={styles.bottomParagraph}>
        Please enter your mobile number <br /> to get otp
      </p>

    </Card>
  )
}

export default Phone