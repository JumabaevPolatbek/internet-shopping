import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {pathApi} from "../index";
import {ResponseOrders} from "../../models/orders";
import type {RootState} from "../../index";

export const adminActions=createApi({
    reducerPath:'adminActions',
    baseQuery:fetchBaseQuery({
        baseUrl:pathApi,
        prepareHeaders:(headers,{getState})=>{
                const {token}=(getState() as RootState).token
            if(token){
                headers.set('authorization', `bearer ${token}`)
                headers.set('Content-type', 'application/json')
                return headers
            }
        }
    }),
    endpoints:(build)=>({
        getOrders:build.query<ResponseOrders[],void>({
            // query:()=>{
            //     return {
            //         url:'orders',
            //         method:'GET',
            //         headers:{
            //             'Content-type': 'application/json'
            //         }
            //     }
            // }
            query:()=>'orders'
        })
    })

})

export const {useGetOrdersQuery}=adminActions