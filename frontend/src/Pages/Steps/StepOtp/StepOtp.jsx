import React, { useState } from 'react'
import Button from "../../../Components/Shared/Button/Button"
import Card from "../../../Components/Shared/Card/Card.jsx"
import styles from "../StepPhoneEmail/StepPhoneEmail.module.css"
import TextInput from '../../../Components/Shared/TextInput/TextInput.jsx'
import { verifyOtp } from '../../../http'
import { useSelector } from "react-redux"
import { setAuth } from "../../../store/authSlice.js"
import { useDispatch } from "react-redux"

function StepOtp({ onNext }) {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch()
  const { email, hash } = useSelector((state) => state.auth.otp)

  async function submit() {

    try {
      const { data } = await verifyOtp({ otp, email, hash });
      // console.log(data)
      dispatch(setAuth(data))

    } catch (err) {
      console.log(err)
    }

    onNext()
  }

  return (
    <>
      <div className={styles.cardWrapper}>
        <Card style={styles.card} title="Enter Your Otp" icon="lock">

          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />

          <div>
            <div className={styles.actionButtonWrap}>
              <Button text="Next" onClick={submit} />
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