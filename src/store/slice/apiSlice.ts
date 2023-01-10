import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Products } from '../models';

type Post={
    id:number,
    name:string,
    pass:string
}


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getProductName: builder.query<Products,string|null>({
            query: (name) => `${name}`,
        }),
        getCategory:builder.query({
            query:()=>`categories`
        }),
        getUser:builder.query({
            query:(name:string)=>name
        }),
        setAuthUser:builder.mutation<Post,Partial<Post>>({
           query:(body)=>({
            url:`auth/login`,
            method:`POST`,
            body
           })
        })
    }),
})

export const {useGetProductNameQuery,useGetCategoryQuery,useGetUserQuery,useSetAuthUserMutation}=productsApi