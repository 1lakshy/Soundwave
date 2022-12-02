import React from "react";

function TopNav() {
  return (
    <div className="bar">
      <div className=" w-[1.5rem] h-[1.5rem] ml-1">
        <h1 className="font-bold text-2xl">YOME</h1>
      </div>
      <div className=" flex w-1/6 justify-between">
        <div className="w-6 h-6">
    
          <img
            className=""
            src="/iconTopNav/sliders-solid.svg"
            alt="Notification"
          />
        </div>
        <div className="w-6 h-6 mr-1">
     
          <img
            className=""
            src="/iconTopNav/magnifying-glass-solid.svg"
            alt="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
