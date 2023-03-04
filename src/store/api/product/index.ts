import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewProduct, Product, Products, UpdateProduct } from '../../models/products';
import { pathApi } from '..';
import { addIdCategory, searchSliceActions } from '../search/searchSlice';


export const actionsProduct = createApi({
    reducerPath: 'actionsProduct',
    baseQuery: fetchBaseQuery({ baseUrl: pathApi}),
    tagTypes:['products'],
    endpoints: (builder) => ({
        getProducts: builder.query<Products,void>({
            query: () => 'products/',
            providesTags:['products']
        }),
        getSingleProduct: builder.query<Product,number|undefined>({
            query: (id) => `products/${id}`,
            providesTags:['products']
        }),
        getLimitProducts: builder.query<Product, number>({
            query:(id)=>`products?limit=${id}`,
            providesTags:['products']
        }),
        getCategoryProducts: builder.query<Product, number>({
            query:(id_category:number)=>`categories/${id_category}/products`,
            async onQueryStarted(data,{dispatch}){
                try{
                    dispatch(addIdCategory(data))
                }
                catch(e){
                    console.log(e)
                }
            },
            providesTags:['products']
        }),
        addNewProduct: builder.mutation<NewProduct,Partial<NewProduct>>({
            query: (product) => ({
                url: `products`,
                method: `POST`,
                body: (product),
                headers: {
                    'Content-type':'application/json'
                }
            }),
            invalidatesTags:['products']
        }),
        updateProduct: builder.mutation<Product,{idProduct:number|undefined,product:Partial<UpdateProduct>}>({
            query: ({idProduct,product}) => ({
                url: `products/${idProduct}`,
                method: 'PUT',
                headers: {
                    'Content-type':'application/json'
                },
                body:JSON.stringify(product)
            }),
            invalidatesTags:['products']
        }),
        deleteProduct: builder.mutation<Product,number>({
            query(id) {
                return {
                    url: `products/${id}`,
                    method:'DELETE'
                }
            },
            invalidatesTags:['products']
        })
    })
})

export const { useGetProductsQuery, 
    useGetCategoryProductsQuery, 
    useAddNewProductMutation, 
    useUpdateProductMutation, 
    useDeleteProductMutation ,
    useGetSingleProductQuery
} = actionsProduct;

