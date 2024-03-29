import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { pathApi } from "..";
import {
    Order,
    OrderDetail,
    ResponseOrders,
    ResponseOrderStatus,
    ServerResponseOrder
} from "../../models/orders";
import {StateProdcut} from "../../reducer/cartProduct";


export const ordersAction=createApi({
    reducerPath:'orders',
    baseQuery:fetchBaseQuery({baseUrl:pathApi}),
    tagTypes:['orders'],
    endpoints:builder=>({
        getOrderStatus:builder.query<ResponseOrderStatus[],void>({
            query:()=>'orders/status/',
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'orders' as const, id })), 'orders']
                    : ['orders']
        }),
        getSingleOrderStatus:builder.query<ResponseOrderStatus,number>({
            query:(id)=>`oreders/status/${id}`
        }),
        addOrderStatus:builder.mutation<ResponseOrderStatus,Omit<ResponseOrderStatus,'id'>>({
            query:(data)=>{
                return {
                    url:'orders/status',
                    method:'POST',
                    headers:{
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                    body:(data)
                }
            }
        }),
        updateOrderStatus:builder.mutation<ResponseOrderStatus,{data:Omit<ResponseOrderStatus,'id'>,id:number|undefined}>({
            query:({data,id})=>{
                return {
                    url:`orders/status/${id}`,
                    method:'POST',
                    headers:{
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                    body:(data)
                }
            }
        }),
        delOrderStatus:builder.mutation<ResponseOrderStatus,number>({
            query:(id)=>{
                return {
                    url:`orders/status/${id}`,
                    method:'DELETE'
                }
            }
        }),
        getOrders:builder.query<ResponseOrders[],string>({
            // query:()=>'orders'
            query:(token)=>{
                console.log('token',token)
                return {
                    url:'orders',
                    method:'GET',
                    headers:{
                        'Authorization': `Bearer ${token}`
                    },

                    // credentials:'include'
                }
            }
        }),
        getOrdersUser:builder.query<ResponseOrders[],number>({
            query:(user_id)=>`orders/${user_id}`
        }),
        addOrder:builder.mutation<ResponseOrders,ServerResponseOrder>({
            query:(data)=>{

                console.log(JSON.stringify(data))
                return {
                    url:'orders',
                    method:'POST',
                    headers:{
                        'Content-type': 'application/json'
                    },
                    body:JSON.stringify(data)
                }
            }
        }),
        delOrder:builder.mutation<ResponseOrders,{id_order:number|undefined,id_user:number|undefined}>({
            query: ({id_order,id_user})=>{
                return {
                    url:`orders/${id_user}/${id_order}`,
                    method:'DELETE'
                }
            }
        })
    })
})

export  const {
    useAddOrderMutation,
    useAddOrderStatusMutation,
    useDelOrderStatusMutation,
    useGetOrdersQuery,
    useGetOrderStatusQuery,
    useGetOrdersUserQuery,
    useGetSingleOrderStatusQuery,
    useUpdateOrderStatusMutation,
    useDelOrderMutation
}=ordersAction