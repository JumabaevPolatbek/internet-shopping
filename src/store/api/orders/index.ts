import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { pathApi } from "..";
import { Order, ServerOrder } from "../../models/orders";


export const ordersAction=createApi({
    reducerPath:'orders',
    baseQuery:fetchBaseQuery({baseUrl:pathApi}),
    tagTypes:['orders'],
    endpoints:builder=>({
        getOrders:builder.query<ServerOrder,void>({
            query:()=>'orders',
            providesTags:['orders']
        }),
        getSingleOrder:builder.query<Order,{id:number|undefined}>({
            query:({id})=>`call_orders/${id}`
        }),
        addOrder:builder.mutation<Order,Partial<Order>>({
            query:(data)=>({
                url:`call_orders`,
                method:'post',
                headers:{
                    'Content-type':'application/json'
                },
                body:(data)
            }),
            invalidatesTags:['orders']
        }),
        delOrder:builder.mutation<{ok:boolean},{id:number}>({
            query:({id})=>({
                url:`call_orders/${id}`,
                method:'DELETE'
            })
        })
    })
})