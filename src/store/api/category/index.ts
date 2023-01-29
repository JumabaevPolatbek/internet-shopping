import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pathApi } from '..';
import { Categories, Category, NewCategories, ResponseTransformCategory } from '../../models/categories';

export const actionsCategories = createApi({
    reducerPath: 'actionsCategory',
    baseQuery: fetchBaseQuery({ baseUrl: pathApi }),
    tagTypes:['categories'],
    endpoints: (builder) => ({
        getCategories:builder.query<Categories,void>({
            query: () => `categories/`,
            // transformResponse: (response: Categories): any => ({
            //     parent: response.filter(category => category.children_category?.length),
            //     child:response.filter(category=>category.children_category?.length===0)
            // }),
            providesTags:['categories']
        }),
        getCategory:builder.query<Category,string|undefined>({
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
        updateCategory: builder.mutation<Category, { idCategory:string|undefined,updateCategory:Partial<NewCategories>}>({
            query({idCategory,updateCategory}) {
                return {
                    url: `categories/${idCategory}`,
                    method: 'PUT',
                     headers: {
                        'Content-type':'application/json'
                    },
                    body: (updateCategory)
                }
            },
            // transformResponse: (response: Category) => {
            //     console.log(response)
            //     return response
            // },
            invalidatesTags:['categories']
        }),
        deleteCategory: builder.mutation<Category, number|undefined>({
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