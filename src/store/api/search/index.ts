import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pathApi } from '..';
import { Categories  } from '../../models/categories';
import {  Countries } from '../../models/countries';
import {  Products } from '../../models/products';
import {  UserServer } from '../../models/userModels';


export const searchValue=createApi({
    reducerPath:'search',
    baseQuery:fetchBaseQuery({baseUrl:pathApi}),
    tagTypes:['products','categories','countries','users'],
    endpoints:(builder)=>({
        getValueProducts:builder.query<Products,string>({
            query:(name)=>`${name}/`,
            providesTags:['products']
        }),
        getValueCategorys:builder.query<Categories,string>({
            query:(category)=>`${category}`,
            providesTags:['categories']
        }),
        getValueUsers:builder.query<UserServer,string>({
            query:(user)=>`${user}`,
            providesTags:['users']
        }),
        getValueCountries:builder.query<Countries,string>({
            query:(country)=>`${country}`,
            providesTags:['countries']
        }),
        getValues:builder.query({
            query:(value:string)=>`${value}`
        })
    })
})


export const {
    useGetValueCategorysQuery,
    useGetValueProductsQuery,
    useGetValueCountriesQuery,
    useGetValueUsersQuery,
    useGetValuesQuery
}=searchValue