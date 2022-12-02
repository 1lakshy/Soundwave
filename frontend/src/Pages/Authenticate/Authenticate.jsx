
import React, { useState } from 'react';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';
import { Link, useNavigate } from "react-router-dom";

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
};


//   function navi() {
    
//     navigate ("/activate");
//     console.log("hellow");
//   }

const Authenticate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];
    const navigate = useNavigate();

// if(step == 1)
// {
    
    function onNext() {
        setStep(step + 1);

        console.log(step)
       
    }
   

    return <Step onNext={onNext} />;
};

export default Authenticate;
