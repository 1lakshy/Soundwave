import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {

const brandStyle={
  color: "rgba(247, 202, 24,1)",
  textDecoration:"none",
  fontweight:"bold",
  fontSize:"22px",
  display: "flex",
  alignItems:"center"
};

const logoText={
  marginLeft:"10px"
};


  return (
   <>
   <nav className={`${styles.navbar} container`}>
     <Link to="/" style={brandStyle}>
     <img style={{ width:50 , height:50}} src="/images/hand-logo.png" alt="logo" />
     <span style={logoText}>Callzeen</span>
     </Link>
   </nav>
   </>
  )
}

export default Navigation