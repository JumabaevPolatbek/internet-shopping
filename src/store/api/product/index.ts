import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewProduct, Product, Products, UpdateProduct } from '../../models/products';
import { pathApi } from '..';


export const actionsProduct = createApi({
    reducerPath: 'actionsProduct',
    baseQuery: fetchBaseQuery({ baseUrl: pathApi }),
    endpoints: (builder) => ({
        getProducts: builder.query<Products,void>({
            query: () => `products/`,
        }),
        getSingleProduct: builder.query<Product,number>({
            query: (id) => `products/${id}`,
        }),
        getLimitProducts: builder.query<Product, number>({
            query:(id)=>`products?limit=${id}`
        }),
        getCategoryProducts: builder.query<Product, number>({
            query:(id_category)=>`categories/${id_category}/products`
        }),
        addNewProduct: builder.mutation<NewProduct,Partial<NewProduct>>({
            query: (product) => ({
                url: `products`,
                method: `POST`,
                body:JSON.stringify(product)
            })
        }),
        updateProduct: builder.mutation<UpdateProduct,Partial<UpdateProduct>>({
            query: ({category_id,...product}) => ({
                url: `products/${category_id}`,
                method: 'PUT',
                body:JSON.stringify(product)
            })
        }),
        deleteProduct: builder.mutation<Product, Partial<Product>>({
            query(product) {
                const { id } = product;
                return {
                    url: `products/${id}`,
                    method:'DELETE'
                }
            }
        })
    })
})

export const { useGetProductsQuery, useGetCategoryProductsQuery, useAddNewProductMutation, useUpdateProductMutation, useDeleteProductMutation } = actionsProduct;

