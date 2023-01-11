import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pathApi } from '..';
import { Categories, Category, NewCategories } from '../../models/categories';

export const actionsCategory = createApi({
    reducerPath: 'actionsCategory',
    baseQuery: fetchBaseQuery({ baseUrl: pathApi }),
    endpoints: (builder) => ({
        getCategories:builder.query<Categories,void>({
            query: () => `categories`,
        }),
        getCategory:builder.query<Category,number>({
            query: (id) => `categories/${id}`,
        }),
        getLimitCategory: builder.query<Category, number>({
            query:(limit)=>`categories?limit=${limit}&offset=${limit}`
        }),
        addNewCategory: builder.mutation<NewCategories, Partial<NewCategories>>({
            query: (category) => ({
                url: `categories`,
                method: 'POST',
                body:JSON.stringify(category)
            })
        }),
        updateCategory: builder.mutation<NewCategories, Partial<NewCategories>>({
            query(category) {
                const { parent_category_id} = category;
                return {
                    url: `categories/${parent_category_id}`,
                    method: 'PUT',
                    body:JSON.stringify(category)
                }
            }
        }),
        deleteCategory: builder.mutation<Category, Category>({
            query(category) {
                const { id } = category
                return {
                    url: `categories/${id}`,
                    method:'DELETE'
                }
            }
        })
    })
})

export const { useGetCategoriesQuery, useGetCategoryQuery, useGetLimitCategoryQuery, useAddNewCategoryMutation, useUpdateCategoryMutation } = actionsCategory;