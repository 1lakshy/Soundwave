import React, { useState } from 'react';
import Button from '../../../Components/Shared/Button/Button';
import Card from '../../../Components/Shared/Card/Card';
import TextInput from '../../../Components/Shared/TextInput/TextInput';
import styles from './StepAvatar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAvatar } from '../../../store/activateSlice.js';
import { activate } from '../../../http/index.js';
import { setAuth } from '../../../store/authSlice.js';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function StepAvatar({ onNext }) {
  const navigate = useNavigate();
  const ava = Math.floor(Math.random() * 10 + 1);
  const dispatch = useDispatch();

  const { name, avatar } = useSelector((state) => state.activate);
  const [image, setImage] = useState(`/images/avatar/av${ava}.png`);
  // const [mounted,setMounted] = useState(true)

  // const reader = new FileReader();
  // reader.readAsDataURL(image)

  // reader.onloadend = function () {
  //   console.log(reader.result);
  //   setImage(reader.result);
  //   dispatch(setAvatar(reader.result));
  // };

  // tryed to fix default image error
  // function defImg(){

  //   const reader = new FileReader();
  //   reader.readAsDataURL(image.files[0])

  //   reader.onload = function () {
  //     console.log(reader.result);
  //     setImage(reader.result);
  //     dispatch(setAvatar(reader.result));
  //   }

  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      console.log(reader.result);
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    };
  }

  //  test@gmail.com
  console.log(' ok  outside submit');

  async function submit() {
    if (!name || !ava) return;
    try {
      console.log('ok inside submit');
      const { data } = await activate({ name, avatar, ava });

      if (data.auth) {
        // if(!mounted){
        dispatch(setAuth(data));
        // }
      }
    } catch (err) {
      console.log(err);
    }

    navigate('/rooms');
  }

  // useEffect(()=>{
  //   return ()=>{
  //      setMounted(false)
  //   }
  // })

  return (
    <>
      <Card
        style={styles.card}
        title={`Please Provide your Avatar ${name}`}
        icon="avatar2"
      >
        <p className={styles.bottomParagraph}>Do you want to use this?</p>
        <div className={styles.avatarWrapper}>
          <img src={image} alt="avatar-logo" className={styles.avatar} />
        </div>

        {/* image selection from device */}
        <div className="">
          <input
            onChange={captureImage}
            type="file"
            id="avatarInput"
            className={styles.avatarInput}
          />
          <label className={styles.avatarLabel} htmlFor="avatarInput">
            Choose a photo
          </label>
        </div>

        <div>
          <div className={styles.actionButtonWrap}>
            <Button text="Next" onClick={submit} />
          </div>
        </div>
      </Card>
    </>
  );
}

export default StepAvatar;
