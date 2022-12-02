import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import Card from '../../Components/Shared/Card/Card';
import Button from '../../Components/Shared/Button/Button';

function Home() {
  const navigate = useNavigate();

  function startRegister() {
    navigate('/authenticate');
    console.log('hellow');
  }

  return (
    <>
      <div className={styles.homeContain}>
        <div className={styles.homeCard}>
          <Card
            style={styles.card}
            title="Welcome to Callzeen"
            icon="logo"
            num="1"
          >
            <div className={styles.wrapCon}>
              <h2 className={styles.text}>
                Your brain works just like a computer,
                <br />
                so make sure you're the <br />
                only one programming it ...
              </h2>

              <div>
                <Button onClick={startRegister} text="Let's Go" />
              </div>

              <div className={styles.signinWrapper}>
                <span className={styles.hasinvite}>Have an invite text ?</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
