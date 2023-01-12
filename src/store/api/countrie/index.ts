import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pathApi } from '..';
import { Countrie, Countries } from '../../models/countries';

export const actionsCountrie = createApi({
    reducerPath: 'actionsCountrie',
    baseQuery: fetchBaseQuery({ baseUrl: pathApi}),
    endpoints: (builder) => ({
        getAllCountries: builder.query<Countries,Countries>({
            query:()=>`countries`
        }),
        getSingleCountrie: builder.query<Countrie, number>({
            query:(id)=>`countries/${id}`
        }),
        getLimitCountries: builder.query<Countries, number>({
            query:(limit)=>`countries?limit=${limit}&offset=${limit}`
        }),
        addNewCountrie: builder.mutation<Countrie, Pick<Countrie, 'country_name'> & Partial<Countrie>>({
            query: (countrie) => ({
                url: 'countries',
                method: 'POST',
                body:JSON.stringify(countrie)
            })
        }),
        updateCountrie: builder.mutation<Countrie, Partial<Countrie>>({
            query(countrie) {
                const { id } = countrie;
                return {
                    url: `countries/${id}`,
                    method: 'PUT',
                    body:JSON.stringify(countrie)
                }
            }
        }),
        deleteCountrie: builder.mutation<Countrie, Partial<Countrie>>({
            query(countrie) {
                const { id } = countrie;
                return {
                    url: `countries/${id}`,
                    method:'DELETE'
                }
            }
        })
    })
})

export const {useGetAllCountriesQuery,useGetLimitCountriesQuery,useGetSingleCountrieQuery}=actionsCountrie