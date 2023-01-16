import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pathApi } from '..';
import { User,NewUserRoot } from '../../models/userModels';

export const actionsUser = createApi({
    reducerPath: 'actionsUser',
    baseQuery: fetchBaseQuery({ baseUrl: pathApi}),
    endpoints: (builder) => ({
        getAllUsers: builder.query<User, void>({
            query:()=>`users`
        }),
        addNewUser: builder.mutation<NewUserRoot,Partial<NewUserRoot>>({
            query(user) {
                return {
                    url: 'users',
                    method: 'POST',
                    headers: {
                        'Content-type':'application/json: charset=UTF-8'
                    },
                    body:JSON.stringify(user)
                }
            }
        })
    })
})

export const {useGetAllUsersQuery,useAddNewUserMutation}=actionsUser