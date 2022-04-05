import React, { useState } from 'react'
import Button from "../../../Components/Shared/Button/Button"
import Card from "../../../Components/Shared/Card/Card"
import TextInput from "../../../Components/Shared/TextInput/TextInput"
import { useDispatch, useSelector } from "react-redux"
import { setName } from '../../../store/activateSlice'


import styles from "./StepName.module.css"

function StepName({ onNext }) {

  const dispatch = useDispatch()
  function nextStep() {
    if (!fullname) {
      return;
    }

    dispatch(setName(fullname));
    onNext();
  }
  const { name } = useSelector((state) => state.activate)

  const [fullname, setFullname] = useState(name);

  return (
    <>
    
      <Card style={styles.card} title="Enter Your Name" icon="name">

        <TextInput value={fullname} onChange={(e) => setFullname(e.target.value)} />

        <div>
          <div className={styles.actionButtonWrap}>
            <Button text="Next" onClick={nextStep} />
          </div>
        </div>
        <p className={styles.bottomParagraph}>
          Please enter your name <br /> to let us know about you
        </p>

      </Card>
    </>
  )
}

export default StepName