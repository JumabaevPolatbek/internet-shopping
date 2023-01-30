import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
import { RootAttr, Variant } from "../models/attributes";
type State={
    count:number,
    arrAttribute:RootAttr[],
    variant:number
}
const initialState:State={
    count:0,
    arrAttribute:[],
    variant:0
}

export const attributes=createSlice({
    name:'addAttribute',
    initialState,
    reducers:{
        increase:(state,action:PayloadAction<RootAttr>)=>{
            state.count=state.count+1;
            state.arrAttribute.push(action.payload)
            console.log('OK')
        },
        decrease:(state,action:PayloadAction<RootAttr>)=>{
            if(state.count<0){
                state.count=0
            } else state.count=state.count-1
            // state.arrAttribute.filter(value=>value!==action.payload)
        },
        increaseVariant:(state,action:PayloadAction<{id:number,values:Variant}>)=>{
            state.variant=state.variant+1;
            const indexAttr=state.arrAttribute.findIndex(item=>item.attribute.category_id===action.payload.id)
            state.arrAttribute[indexAttr].variants.push(action.payload.values)
        }
    }
})

export const {increase,decrease,increaseVariant}=attributes.actions
export const stateAttribute=(state:RootState)=>state.stateAttribute