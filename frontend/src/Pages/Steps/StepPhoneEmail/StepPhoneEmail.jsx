import React, { useState } from 'react'
import Button from "../../../Components/Shared/Button/Button"
import Phone from './Phone/Phone';
import Email from './Email/Email';
import styles from "./StepPhoneEmail.module.css"


const PhoneEmailMap = {
    phone: Phone,
    email: Email,
}

function StepPhoneEmail({ onNext }) {

    const [type, setType] = useState("phone");
    const Component = PhoneEmailMap[type];


    return (
        <>
            <div className={styles.cardWrapper}>
              <div>
                <div className={styles.buttonWrap}>
                    <button onClick={() => setType("phone")}>Phone</button>
                    <button onClick={() => setType("email")}>Email</button>
                </div>
                <Component onNext={onNext} />
                </div>
            </div>

          
        </>
    )
}

export default StepPhoneEmail