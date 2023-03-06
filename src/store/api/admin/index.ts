import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {pathApi} from "../index";
import {ResponseOrders} from "../../models/orders";
import type {RootState} from "../../index";
import { Cookies } from "react-cookie";

export const adminActions=createApi({
    reducerPath:'adminActions',
    baseQuery:fetchBaseQuery({
        baseUrl:pathApi,
        prepareHeaders:(headers,{getState})=>{
                const cookie = new Cookies()
                console.log(cookie.get('token'))
                console.log('Store State',(getState() as RootState).token)
                if(!!cookie.get('token')){
                    return headers.set('Authorization',`Bearer ${cookie.get('token')}`)
                }
        }
    }),
    endpoints:(build)=>({
        getOrders:build.query<ResponseOrders[],void>({
            query:()=>'orders'
        })
    })

})

export const {useGetOrdersQuery}=adminActions