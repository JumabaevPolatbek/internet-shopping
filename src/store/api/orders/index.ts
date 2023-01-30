import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { pathApi } from "..";


export const ordersAction=createApi({
    reducerPath:'orders',
    baseQuery:fetchBaseQuery({baseUrl:pathApi}),
    tagTypes:['orders'],
    endpoints:builder=>({
        getOrders:builder.query({
            query:()=>'orders'
        }),
        
    })
})