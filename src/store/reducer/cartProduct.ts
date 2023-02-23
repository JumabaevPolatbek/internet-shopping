import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './../index';
import { Product } from "../models/products";
import {OrderDetail} from "../models/orders";

export type StateProdcut={
    product_id:number,
    quantity:number
    price:number
}
type State={
    count:number
    product:OrderDetail[]
}

const initialState:State = {
    count:0,
    product:[] ,
}

export const cartProduct=createSlice({
    name:'cartProduct',
    initialState,
    reducers:{
        addProduct: (state,action:PayloadAction<Product>)=>{
            const {price,id}=action.payload
            if(state.product.find(item=>item.product_id===action.payload.id)===undefined){
                state.product.push({
                    product_id:id,
                    price,
                    quantity:1
                })
            }else{
                var index:number = state.product.findIndex(item=>item.product_id===action.payload.id)
                state.product[index].quantity+=1
            }
                state.count += 1
        },
        decrementQty: (state,action:PayloadAction<number>)=>{
            var index:number = state.product.findIndex(item=>item.product_id===action.payload)

            if(state.product.find(item=>item.product_id===action.payload)?.quantity===1){
                state.product=state.product.filter(item=>item.product_id!==action.payload)
                state.count-=1
            }else{
                state.product[index].quantity-=1
                state.count-=1
            }

        },
        delProduct:(state,action:PayloadAction<number>)=>{
            var index:number = state.product.findIndex(item=>item.product_id===action.payload)
            state.count= state.count - state.product[index].quantity
            state.product = state.product.filter(item=>item.product_id!==action.payload)
        }
    }
})

export const {
    addProduct,
    delProduct,
    decrementQty}=cartProduct.actions
export const cartProductOrder=(state:RootState)=>state.cartProduct
