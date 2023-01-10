import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  Products } from '../models';

const initialState:Products|any=[]

export const putData = createSlice({
    name: 'storeData',
    initialState,
    reducers: {
        getData:(state,action:PayloadAction<Products>)=>[...state,action.payload]
    }
})