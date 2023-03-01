import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {pathApi} from "../index";
import {CallBack, ResponseCallBack} from "../../models/callBack";


export const callBack=createApi({
    reducerPath:'callBack',
    baseQuery:fetchBaseQuery({baseUrl:pathApi}),
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
            }
        })
    })
})

export const {useSendCallMutation}=callBack