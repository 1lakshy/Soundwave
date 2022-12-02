import React,{useState} from "react";
import { userProfile } from "../http";

function Login() {

  const [profile,setProfile] = useState("")

 async function google() {
  // window.open("http://localhost:5500/auth/google" ,"_self")
  window.open("http://localhost:5500/auth/google" ,"_self")
    const {data} = await userProfile()
    // setProfile(userProfile)
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-pink-300">
      <div className="py-8 bg-slate-100 rounded-bl-[6rem]">
        <img src="/Photo/connect.png" alt="" className="contain "/>
      </div>
      <div className=" h-3/5">
        <div className="my-4 ml-4">
          <h1 className="HeadingFont ">Connecting the world is really important,</h1>
  
        </div>

        <div className="my-6 ml-6 w-[calc(100%-3rem)] justify-center flex bg-slate-100 py-1 rounded-full">
          <button onClick={google} className="w-full flex">
            <img src="/icons/google.png" alt="" className="h-12 relative left-4"/>
            <h2 className="HeadingFont2 pl-24 py-2">Login</h2>
          </button>
          <br />
          {/* <button>twitter</button> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
