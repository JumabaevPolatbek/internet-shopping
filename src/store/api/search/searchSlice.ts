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
        min:10,
        max:10000
    },
    category_id:1
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
        },
        minPrice:(state,action:PayloadAction<number>)=>{
            state.price.min=action.payload
        },
        maxPrice:(state,action:PayloadAction<number>)=>{
            state.price.max=action.payload
        }
    }
})

export const 
    {addIdCategory,
    addValue,
    removeValue,
    minPrice,
    maxPrice}
    =seacrhSlice.actions

export const searchSliceActions=(state:RootState)=>state.searchState