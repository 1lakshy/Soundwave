import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  user: null,
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

      state.user = user;
      state.isAuth = true;
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