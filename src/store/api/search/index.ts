import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pathApi } from '..';
import { Products } from '../../models/products';
import { StateSearch } from './searchSlice';



export const advancedSearch=createApi({
    reducerPath:'advancedSearch',
    baseQuery:fetchBaseQuery({baseUrl:pathApi}),
    tagTypes:['categories','products'],
    endpoints:build => ({
        getFilterProduct: build.query<Products,{type?:'category'|'price'|'attributes'|' ';filters:StateSearch}>({
            query:({type,filters})=>{
                switch (type) {
                    case 'category':
                        return {
                            url:`categories/${filters.category_id}/products`
                        }
                        break;
                    case 'price':
                        return{
                            url:`categories/${filters.category_id}/products`,
                            params:{min_price:filters.price.min,max_price:filters.price.max}
                        }
                        break;
                    case 'attributes':
                        return{
                            url:`cateogries/products?${filters.value.join('&')}`
                        }
                    default:
                        return{
                            url:'products'
                        }
                        break;
                }
            }
        })
    })
})


export const {useGetFilterProductQuery} = advancedSearch

