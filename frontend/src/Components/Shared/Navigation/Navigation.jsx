import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { logout } from '../../../http';
import styles from './Navigation.module.css';
import { setAuth } from '../../../store/authSlice.js';
import { useDispatch, useSelector } from 'react-redux';
// import Cookies from 'universal-cookie';
// import {useNavigate}  from "react-router-dom";
import Cookies from 'js-cookie';
function Navigation() {
  const dispatch = useDispatch();
  const brandStyle = {
    color: 'rgba(247, 202, 24,1)',
    textDecoration: 'none',
    fontweight: 'bold',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
  };

  const logoText = {
    marginLeft: '10px',
  };
  // const cookies = new Cookies();
  // const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  // const avatarPath = cookies.name;
  // console.log(cookies.get('localhost'));

  const userAvatar = Cookies.get('Avatar');
  console.log( userAvatar);

  async function logoutUser() {
    try {
      const { data } = await logout();

      dispatch(setAuth(data));
      console.log(data);

      // navigate("http://localhost:5500/auth/logout")

      window.open('http://localhost:5500/auth/logout', '_self');
      // navigate(/)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <nav className={`${styles.navbar} container`}>
        <Link to="/" style={brandStyle}>
          <img
            style={{ width: 50, height: 50, paddingLeft: 5 }}
            src="/images/logo.png"
            alt="logo"
          />
          <span style={logoText}>Callzeen</span>
        </Link>

        <div className={styles.navRight}>
          <div>
            {/* <h3>{user.name}</h3> */}
            <img
              src={userAvatar}
              width="50"
              height="50"
              alt="avatar"
              className={styles.avatar}
            />
          </div>
          {isAuth && (
            <button onClick={logoutUser} className={styles.logout}>
              {' '}
              logOut{' '}
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
