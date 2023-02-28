import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./index";
import {PayloadAction} from "@reduxjs/toolkit";
import {Cookies} from "react-cookie";
type State={
    token:string
}
const initialState:State={
    token:''
}

export const tokenSlice=createSlice({
    name:'tokenSlice',
    initialState,
    reducers:{
        login:(state,action:PayloadAction<string>)=>{
            const cookie = new Cookies()
            if(cookie.get('token')===undefined){
                state.token=action.payload
                cookie.set('token',state.token)
            } else {
                state.token=cookie.get('token')
            }
            // state=action.payload
        },
        logout:(state)=>{
            const cookie = new Cookies()
            cookie.remove('token')
            state.token=''
        }
    }
})

export const {login,logout}=tokenSlice.actions
export const tokenSliceAction=(state:RootState)=>state.token
