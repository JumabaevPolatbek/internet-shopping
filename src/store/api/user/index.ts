import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pathApi } from '..';
import { User } from '../../models/userModels';

export const actionsUser = createApi({
    reducerPath: 'actionsUser',
    baseQuery: fetchBaseQuery({ baseUrl: pathApi}),
    endpoints: (builder) => ({
        getAllUsers: builder.query<User, void>({
            query:()=>`users`
        })
    })
})

export const {useGetAllUsersQuery}=actionsUser