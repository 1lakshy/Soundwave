import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
const navigate = useNavigate();

const moveFeed = event =>{ navigate("/feed")}


  return (
    <div
      className=" nav ">
   <div><img className="w-[2rem]" src="/NavIcon/Home.png" alt="" /></div>
   <div><img className="w-[2.5rem]" src="/NavIcon/chating-gray.png" alt="" /></div>
   <div onClick={moveFeed}>
    <img className="w-[4rem]" src="/NavIcon/Upload.png" alt="" />
    
    </div>
   <div><img className="w-[2rem]" src="/NavIcon/notification-gray.png" alt="" /></div>
   <div><img className="w-[2rem]" src="/NavIcon/profile-gray.png" alt="" /></div>
    </div>
  );
}

export default Nav;
