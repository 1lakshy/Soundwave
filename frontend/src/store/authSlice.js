import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  user: {
    activated: false,
    email:"",
    name:"",
    avatar:""
  },
  otp: {
    email:"",
    hash:""
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { user } = action.payload;

      state.user.email = user.email;
      state.user.name = user.name;
      state.user.avatar = user.avatar;
      state.user.activated = user.activated;

      

      if(user.email === ""){
        state.isAuth = false;

      }else{
        state.isAuth = true;
      }

    },
    setOtp: (state, action) =>{

      const {email,hash} = action.payload;
      state.otp.email = email;
      state.otp.hash = hash;

    }

}})

// Action creators are generated for each case reducer function
export const { setAuth, setOtp } = authSlice.actions

export default authSlice.reducer