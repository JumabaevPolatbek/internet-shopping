import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
import {  Variant } from "../models/attributes";
type State={
    count:number,
    variants:Variant[],
}
const initialState:State={
    count:0,
    variants:[],
}

export const attributes=createSlice({
    name:'addAttribute',
    initialState,
    reducers:{
        increase:(state)=>{
           state.count+=1
            state.variants.push({value:''})
        },
        decrease:(state,action:PayloadAction<string>)=>{
            
            if(state.count<0){
                state.count=0
                state.variants.filter((variant,index)=>variant.value!==action.payload)
            }else {
                state.count-=1
                state.variants.filter((variant,index)=>variant.value!==action.payload)
            }
            
        },
       
    }
})

export const {increase,decrease}=attributes.actions
export const stateAttribute=(state:RootState)=>state.stateAttribute