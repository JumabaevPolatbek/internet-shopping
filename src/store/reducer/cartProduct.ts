import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './../index';
import { Product } from "../models/products";

type StateProdcut={
    product_id:number,
    quantity:number
    name:string
    price:number
}
type State={
    count:number
    product:StateProdcut[]
    active:boolean
}

const initialState = {
    count:0,
    product:[{
        product_id:0,
        quantity:0,
        name:'',
        price:0
    }],
}

export const cartProduct=createSlice({
    name:'cartProduct',
    initialState,
    reducers:{
        addProduct:(state,action:PayloadAction<Omit<Product,'quantity'>>)=>{
            if(state.product.find((item)=>item.product_id!==action.payload.id)){
                    state.count+=1
                    state.product.push({product_id:action.payload.id,
                        quantity:1,
                        name:action.payload.name,
                        price:action.payload.price})
            }
        },
        incrementQty:(state,action:PayloadAction<number>)=>{
            var index:number = state.product.findIndex(item=>item.product_id===action.payload)
            if(state.product.find(item=>item.product_id===action.payload)){
                state.count+=1
                state.product[index].quantity+=1
            }
        },
        decrementQty:(state,action:PayloadAction<number>)=>{
            var index:number = state.product.findIndex(item=>item.product_id===action.payload)
            // if(state.product.find(item=>item.product_id===action.payload)){
            //     state.count-=1
            //     state.product[index].quantity-=1
            //     if(state.product[index].quantity===0){
            //         state.product.filter(item=>item.product_id===action.payload)
            //         state.count-=1
            //     }
            // }
            // if(state.product[index].quantity===1){
            //     state.product.filter(item=>item.product_id!==action.payload)
            //     state.count-=1
            // } else{
            //     state.product[index].quantity-=1
            //     state.count-=1
            // }
            if(state.product.find(item=>item.product_id===action.payload)?.quantity===1){
                state.product.filter(item=>item.product_id!==action.payload)
                state.count-=1
            }else{
                state.product[index].quantity-=1
                state.count-=1
            }

        },
        delProduct:(state,action:PayloadAction<number>)=>{
            var index:number = state.product.findIndex(item=>item.product_id===action.payload)
            state.product.filter(item=>item.product_id!==action.payload)
            state.count=state.count-state.product[index].quantity
        }
    }
})

export const {
    addProduct,
    incrementQty,
    delProduct,
    decrementQty}=cartProduct.actions
export const cartProductOrder=(state:RootState)=>state.cartProduct
