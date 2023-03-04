import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../reducer";

export type StateSearch={
    value:string[],
    price:{
        min:number
        max:number
    },
    category_id:number
}

const initialState:StateSearch={
    value:[],
    price:{
        min:0,
        max:0
    },
    category_id:0
}

export const seacrhSlice=createSlice({
    name:'searchFilters',
    initialState,
    reducers:{
        addIdCategory:(state,action:PayloadAction<number>)=>{
            state.category_id=action.payload
        },
        addValue:(state,action:PayloadAction<number>)=>{
            var filter=`filters=${action.payload}`
            if(state.value.find(filters=>filters===filter)===undefined){
                state.value.push(filter)
            }
        },
        removeValue:(state,action:PayloadAction<number>)=>{
            var filter=`filters=${action.payload}`
            state.value.filter(filters=>filters!==filter)
        }
    }
})

export const 
    {addIdCategory,
    addValue,
    removeValue}
    =seacrhSlice.actions

export const searchSliceActions=(state:RootState)=>state.searchState