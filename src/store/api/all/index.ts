import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pathApi } from '..';
import { Categories } from '../../models/categories';
import { Products } from '../../models/products';
import { User } from '../../models/userModels';
export const getAll = createApi({
    reducerPath: 'getAll',
    baseQuery: fetchBaseQuery({ baseUrl: pathApi }),
    tagTypes:['products','categories','countries','users'],
    endpoints: (builder) => ({
        getAllApi: builder.query<Categories|Products|User,string>({
            query: (name)=>`${name}`
        })
    })
})


export const {useGetAllApiQuery}=getAll