import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pathApi } from '..';
import { Products } from '../../models/products';
import { StateSearch } from './searchSlice';


export const advancedSearch=createApi({
    reducerPath:'advancedSearch',
    baseQuery:fetchBaseQuery({baseUrl:pathApi}),
    tagTypes:['categories','products'],
    endpoints:build => ({
        filterProduct: build.query<Products,{type:string,filters:StateSearch}>({
            query : ({type,filters})=>({
                url:`category/${filters.category_id}/`,
                params:{
                    products:type==='price'
                    ?`min_price=${filters.price.min}&max_price=${filters.price.max}`
                    :filters.value.join('&')
                }
            })
        })
    })
})

