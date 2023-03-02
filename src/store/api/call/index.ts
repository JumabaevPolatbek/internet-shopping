import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {pathApi} from "../index";
import {CallBack, ResponseCallBack} from "../../models/callBack";


export const callBack=createApi({
    reducerPath:'callBack',
    baseQuery:fetchBaseQuery({baseUrl:pathApi}),
    tagTypes:['call_orders'],
    endpoints: build => ({
        sendCall:build.mutation<CallBack,CallBack>({
            query : (data)=>{
                return {
                    url:`call_orders`,
                    method:'POST',
                    headers:{
                        'Content-type':'application/json'
                    },
                    body:(data)
                }
            },
            invalidatesTags:['call_orders']
        }),
        getCalls:build.query<ResponseCallBack[],void>({
            query:()=>'call_orders',
            providesTags:['call_orders']
        }),
        removeCall:build.mutation<ResponseCallBack,number|undefined>({
            query: (id)=>{
                return {
                    url:`call_orders/${id}`,
                    method:'DELETE'
                }
            },
            invalidatesTags:['call_orders']
        })
    })
})

export const {useSendCallMutation,useGetCallsQuery,useRemoveCallMutation}=callBack