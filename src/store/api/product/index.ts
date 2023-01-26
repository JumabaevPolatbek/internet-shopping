import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewProduct, Product, Products, UpdateProduct } from '../../models/products';
import { pathApi } from '..';


export const actionsProduct = createApi({
    reducerPath: 'actionsProduct',
    baseQuery: fetchBaseQuery({ baseUrl: pathApi}),
    tagTypes:['products'],
    endpoints: (builder) => ({
        getProducts: builder.query<Products,void>({
            query: () => 'products/',
            providesTags:['products']
        }),
        getSingleProduct: builder.query<Product,string|undefined>({
            query: (id) => `products/${id}`,
            providesTags:['products']
        }),
        getLimitProducts: builder.query<Product, number>({
            query:(id)=>`products?limit=${id}`,
            providesTags:['products']
        }),
        getCategoryProducts: builder.query<Product, number>({
            query:(id_category)=>`categories/${id_category}/products`,
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
        updateProduct: builder.mutation<UpdateProduct,Partial<UpdateProduct>>({
            query: ({category_id,...product}) => ({
                url: `products/${category_id}`,
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

