import React from 'react'
import Button from "../../../Components/Shared/Button/Button"

function StepName({onNext}) {
  return (
    <>
    <div>Name</div>
    <button onClick={onNext}>Next</button>
</>
  )
}

export default StepName