import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
type State={
  username:string|null
  token?:string|null
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
        state.username=action.payload.username
        state.token=action.payload.token
        state.isActive=true
    },
    logOut:()=>initialState
  }
})

export const {signIn,logOut}=authSlice.actions
export const stateAuth=(state:RootState)=>state.userAuth