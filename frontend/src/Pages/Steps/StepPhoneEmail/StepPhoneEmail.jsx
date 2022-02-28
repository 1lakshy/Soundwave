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
              <div className={styles.container}>
                <div className={styles.buttonWrap}>

                    <button className={`${styles.tabButton} ${type === "phone" ? styles.active : ""}`} onClick={() => setType("phone")}>
                        <img style={{width:25, height:25}} src="/images/phone.png" alt="phone" />
                    </button>

                    <button className={`${styles.tabButton} ${type === "email" ? styles.active : ""}`} onClick={() => setType("email")}>
                    <img src="/images/email.png" alt="email" />
                    </button>

                </div>
                <Component onNext={onNext} />
                </div>
            </div>

          
        </>
    )
}

export default StepPhoneEmail