import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pathApi } from '..';
import { Countrie, Countries,NewCountry } from '../../models/countries';

export const actionsCountrie = createApi({
    reducerPath: 'actionsCountrie',
    baseQuery: fetchBaseQuery({ baseUrl: pathApi }),
    tagTypes:['countries'],
    endpoints: (builder) => ({
        getAllCountries: builder.query<Countries,void>({
            query: () => 'countries',
            providesTags:['countries']
        }),
        getSingleCountrie: builder.query<Countrie, number|undefined>({
            query: (id) => `countries/${id}`,
            providesTags:['countries']
        }),
        getLimitCountries: builder.query<Countries, number>({
            query: (limit) => `countries?limit=${limit}&offset=${limit}`,
            providesTags:['countries']
        }),
        addNewCountrie: builder.mutation<NewCountry, Partial<NewCountry>>({
            query: (countrie) => ({
                url: `countries`,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body:JSON.stringify(countrie)
            }),
            invalidatesTags:['countries']
        }),
        updateCountrie: builder.mutation<Countrie, {idCountry:string|undefined,country:Partial<NewCountry>}>({
            query({idCountry,country}) {
                return {
                    url: `countries/${idCountry}`,
                    method: 'PUT',
                    headers: {
                        'Content-type':'application/json'
                    },
                    body:(country)
                }
            },
            invalidatesTags:['countries']
        }),
        deleteCountrie: builder.mutation<Countrie, number>({
            query: (id) => {
                return {
                    url: `countries/${id}`,
                    method:'DELETE'
                }
            },
            invalidatesTags:['countries']
        })
    })
})

export const { useGetAllCountriesQuery,
    useGetLimitCountriesQuery,
    useGetSingleCountrieQuery,
    useAddNewCountrieMutation,
    useUpdateCountrieMutation,
    useDeleteCountrieMutation
} = actionsCountrie