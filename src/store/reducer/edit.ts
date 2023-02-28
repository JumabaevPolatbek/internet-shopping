import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './../index';
import { UpdateUserRoot } from "../models/userModels";

const initialState:UpdateUserRoot={
   user:{
        username:'',
        is_admin:false
   },
   user_detail:{
    first_name:'',
    last_name:'',
    user_image:''
   }
}


export const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<UpdateUserRoot>) => {
            state.user.username=action.payload.user.username
            state.user.is_admin=action.payload.user.is_admin
            state.user_detail.first_name=action.payload.user_detail.first_name
            state.user_detail.last_name=action.payload.user_detail.last_name
            state.user_detail.user_image=action.payload.user_detail.user_image
        }
    }
})

export const { getUser } = editSlice.actions
export const selectEditSlice=(state:RootState)=>state.editUser