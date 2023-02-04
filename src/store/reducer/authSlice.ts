import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
type State={
  username:string
  token:string
  isActive:boolean
}
const initialState:State={
  username:'',
  token:'',
  isActive:false,
}
export const authSlice=createSlice({
  name:'authSLice',
  initialState,
  reducers:{
    signIn:(state,action:PayloadAction<{username:string,token:string}>)=>{
      if(localStorage.getItem('token')){

      }
      state.username=action.payload.username
      state.token=action.payload.token
      state.isActive=true
      localStorage.setItem('token',state.token)
    },
    logOut:(state)=>{
      state.username=''
      state.token=''
      state.isActive=false
      localStorage.removeItem('token')
    }
  }
})

export const {signIn,logOut}=authSlice.actions
export const stateAuth=(state:RootState)=>state.userAuth