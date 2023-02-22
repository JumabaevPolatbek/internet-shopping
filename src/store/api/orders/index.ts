import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { pathApi } from "..";
import { ResponseOrders, ResponseOrderStatus} from "../../models/orders";


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
                        'Content-type': 'application/json'
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
        getOrders:builder.query<ResponseOrders[],void>({
            query:()=>'orders'
        }),
        getOrdersUser:builder.query<ResponseOrders[],number>({
            query:(user_id)=>`orders/${user_id}`
        }),
        addOrder:builder.mutation<ResponseOrders,ResponseOrders[]>({
            query:(data)=>{
                return {
                    url:'orders/',
                    method:'POST',
                    headers:{
                        'Content-type': 'application/json'
                    },
                    body:(data)
                }
            }
        }),
        delOrder:builder.mutation<ResponseOrders,{id_order:number|undefined,id_user:number|undefined}>({
            query: ({id_order,id_user})=>{
                return {
                    url:`orders/${id_order}/${id_order}`,
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