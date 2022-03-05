import React,{useState} from 'react'
import StepName from "../Steps/StepName/StepName"
import StepAvatar from "../Steps/StepAvatar/StepAvatar"

function Activate() {
  const steps = {
    1: StepName,
    2: StepAvatar
  }
  const onNext =()=> {
    setStep(step + 1)
  }
  const [step, setStep] = useState(1)
  console.log(step);
  const Step = steps[step]

  return (
    <div className="cardWrapper">
    <Step onNext={onNext}></Step>
    </div>
  )
}

export default Activate