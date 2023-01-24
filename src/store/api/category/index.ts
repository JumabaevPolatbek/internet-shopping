import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pathApi } from '..';
import { Categories, Category, NewCategories } from '../../models/categories';

export const actionsCategories = createApi({
    reducerPath: 'actionsCategory',
    baseQuery: fetchBaseQuery({ baseUrl: pathApi }),
    tagTypes:['categories'],
    endpoints: (builder) => ({
        getCategories:builder.query<Categories,void>({
            query: () => `categories/`,
            providesTags:['categories']
        }),
        getCategory:builder.query<Category,number>({
            query: (id) => `categories/${id}`,
            providesTags:['categories']
        }),
        getLimitCategory: builder.query<Category, number>({
            query:(limit)=>`categories?limit=${limit}&offset=${limit}`,
            providesTags:['categories']
        }),
        addNewCategory: builder.mutation<NewCategories, Partial<NewCategories>>({
            query: (category) => ({
                url: `categories`,
                method: 'POST',
                mode:'cors',
                headers: {
                        'Content-type':'application/json'
                    },
                body:(category)
            }),
            invalidatesTags:['categories']
        }),
        updateCategory: builder.mutation<NewCategories, Partial<NewCategories>>({
            query(category) {
                const { parent_category_id} = category;
                return {
                    url: `categories/${parent_category_id}`,
                    method: 'PUT',
                    body:JSON.stringify(category)
                }
            },
            invalidatesTags:['categories']
        }),
        deleteCategory: builder.mutation<Category, number>({
            query(id) {
                return {
                    url: `categories/${id}`,
                    method:'DELETE'
                }
            },
            invalidatesTags:['categories']
        })
    })
})

export const { useGetCategoriesQuery,
    useGetCategoryQuery,
    useGetLimitCategoryQuery, 
    useAddNewCategoryMutation, 
    useUpdateCategoryMutation,
    useDeleteCategoryMutation } = actionsCategories;