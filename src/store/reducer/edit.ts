import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './../index';
import { User } from "../models/userModels";

const initialState:User={
    username: "",
    is_admin: false,
    id: 0,
    user_detail: {
        first_name: '',
        last_name: '',
        user_image: '',
        id:0
    },
    phone_numbers: [],
    addresses: []
}


export const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<User>) => {
            state.username = action.payload.username
            state.id = action.payload.id
            state.is_admin = action.payload.is_admin
            state.phone_numbers = action.payload.phone_numbers
            state.user_detail=action.payload.user_detail
            state.addresses=action.payload.addresses
        }
    }
})

export const { getUser } = editSlice.actions
export const selectEditSlice=(state:RootState)=>state.editUser