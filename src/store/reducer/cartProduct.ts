import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './../index';
import { Product } from "../models/products";

const initialState = {} as Product

export const cartProduct=createSlice({
    name:'cartProduct',
    initialState,
    reducers:{
        addProduct:(state,action:PayloadAction<Product>)=>{
            state.name=action.payload.name
            state.id=action.payload.id
            state.category=action.payload.category
            state.description=action.payload.description
            state.images=action.payload.images
            state.price=action.payload.price
            state.quantity=1
        },
        incrementQty:(state)=>{
            state.quantity=state.quantity+1
        },
        decrementQty:(state)=>{
            if(state.quantity===1){
                return initialState
            } else{
                state.quantity=state.quantity-1
            }
        },
        delProduct:(state)=>{
            return initialState
        }
    }
})

export const {
    addProduct,
    incrementQty,
    delProduct,
    decrementQty}=cartProduct.actions
export const cartProductOrder=(state:RootState)=>state.cartProduct
