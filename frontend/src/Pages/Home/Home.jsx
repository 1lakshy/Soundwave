import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Card from '../../Components/Shared/Card/Card';
import Button from '../../Components/Shared/Button/Button';


function Home() {
  const navigate = useNavigate();

  function startRegister() {
    
    navigate ("/authenticate");
    console.log("hellow");
  }

  return (<>
    <div className={styles.cardWrapper}>

      <Card style={styles.card} title="Welcome to Callzeen" icon="logo">
        <p className={styles.text}>
          Aenean commodo ligula eget dolor.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim
        </p>

        <div>
          <Button onClick={startRegister} text="Start" />
        </div>

        <div className={styles.signinWrapper}>

          <span className={styles.hasinvite}>Have an invite text ?</span>
          {/* <Link to="/login" style={{ color: "#0077ff", fontSize: 14, marginLeft: 10, textDecoration: "none", fontWeigth: "400" }}>Sign in</Link> */}

        </div>
      </Card>

    </div>
  </>
  )
}

export default Home