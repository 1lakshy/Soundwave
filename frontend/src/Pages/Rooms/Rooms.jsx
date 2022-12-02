import React,{useState,useNavigate} from 'react';
import styles from './Rooms.module.css';
import featureCard from '../../Components/Shared/featureCard/featureCard';
import Discovery from "../../Components/RoomComponents/Discovery" 
import Podcast from "../../Components/RoomComponents/Podcast" 
import Notification from "../../Components/RoomComponents/Notification" 
import Favorite from "../../Components/RoomComponents/Favorite" 
import Primeum from "../../Components/RoomComponents/Primeum" 


import { AiFillCompass,AiFillBell,AiFillCrown,AiFillGift,AiFillQqCircle} from 'react-icons/ai';
import {BsFillCalendarDateFill } from 'react-icons/bs';

function Rooms() {

  const steps = {
    1: Discovery ,
    2: Podcast,
    3: Notification,
    4: Favorite,
    5: Primeum,

};

// const Authenticate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];
    // const navigate = useNavigate();

// if(step == 1)
// {
    
    // function onNext() {
    //     setStep(step + 1);

    //     console.log(step)
       
    // }
   

//     return <Step onNext={onNext} />;
// };
  return (
    <>
      <div className={styles.roomCard}>
        <div className={styles.roomMenu}>
          <div className={styles.logoCon}>
            <img
              style={{ width: 45, height: 45, marginLeft: 4 }}
              src="/images/logo.png"
              alt="logo"
            />

            <span>Callzeen</span>
          </div>

          <div className={styles.optionsCon}>
            <div className={styles.options} onClick={()=> setStep(1)}>
            <AiFillCompass/>
              <span>Discovery</span>
            </div>
            <div className={styles.options} onClick={()=> setStep(2)}>
              <AiFillQqCircle/>
              <span>Podcast</span>
            </div>
            <div className={styles.options} onClick={()=> setStep(3)}>
              <AiFillBell/>
              <span>Notification</span>
            </div>
            <div className={styles.options} onClick={()=> setStep(4)}>
              <AiFillGift/>
              <span>favorite</span>
            </div>
            <div className={styles.options} onClick={()=> setStep(5)}>
              <AiFillCrown/>
              <span>Primeum</span>
            </div>
          </div>
        </div>

        <div className={styles.roomMiddle}>
          <div className={styles.feature}>
        <div className={styles.middleNav}>
          <span className='topic'>Hello Deepti</span>
          <p><BsFillCalendarDateFill/>October 26</p>
        </div>
<div style={{width:"95%",margin:"auto"}}>

<Step/>
</div>

            {/* <featureCard /> */}
          </div>
          {/* <div className={styles.explore}></div>
          <div className={styles.categories}></div> */}
        </div>
        <div className={styles.roomFriends}></div>
      </div>
    </>

    // <div className="container room">
    //   <div className={styles.roomHeader}>
    //     <div className={styles.left}>
    //       <span className={styles.heading}>All Podcast Room</span>
    //       <div className={styles.searchBox}>
    //         <img
    //           src="/images/search-icon.png"
    //           width="20"
    //           height="20"
    //           alt=""
    //           srcset=""
    //         />
    //         <input type="text" className={styles.searchInput} />
    //       </div>
    //     </div>
    //     <div className={styles.right}>
    //       <button className={styles.butt}>Start pordcat</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Rooms;
