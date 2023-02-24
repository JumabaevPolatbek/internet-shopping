import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './../index';
import {OrderDetail} from "../models/orders";
import {Product} from "../models/products";

type State = {
    count:number
    products:OrderDetail[]
}
const initialState:State={
    count:0,
    products:[]
}

export const likesCount=createSlice({
    name:'likesCount',
    initialState,
    reducers:{
        increase:(state,action:PayloadAction<Product>)=>{
            const {id,quantity,price}=action.payload
            if(state.products.find(product=>product.product_id===id)===undefined){
                state.products.push({
                    product_id:id,
                    quantity,
                    price
                })
                state.count+=1
            }
        },
        decrease:(state,action:PayloadAction<number>)=>{
            state.products=state.products.filter(product=>product.product_id!==action.payload)
            if(state.count<0){
                state.count=0
            }else state.count-=1
        }
    }
})

export const {increase,decrease}=likesCount.actions