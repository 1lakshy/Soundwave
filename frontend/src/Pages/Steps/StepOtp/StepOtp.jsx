import React,{useState} from 'react'
import Button from "../../../Components/Shared/Button/Button"
import Card from "../../../Components/Shared/Card/Card.jsx"
import styles from "../StepPhoneEmail/StepPhoneEmail.module.css"
import TextInput from '../../../Components/Shared/TextInput/TextInput.jsx'


function StepOtp({ onNext }) {

  const [otp,setOtp] = useState("");

  return (
    <>
    <div className={styles.cardWrapper}>
      <Card style={styles.card} title="Enter Your Otp" icon="lock">

        <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />

        <div>
          <div className={styles.actionButtonWrap}>
            <Button text="Next" onClick={onNext} />
          </div>
        </div>
        <p className={styles.bottomParagraph}>
          Please enter your mobile number <br /> to get otp
        </p>

      </Card>
      </div>
    </>
  )
}

export default StepOtp