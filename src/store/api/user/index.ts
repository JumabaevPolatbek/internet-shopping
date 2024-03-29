import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pathApi } from '..';
import { UserServer,NewUserRoot, User, UpdateUserRoot } from '../../models/userModels';

export const actionsUser = createApi({
    reducerPath: 'actionsUser',
    baseQuery: fetchBaseQuery({ baseUrl: pathApi }),
    tagTypes:['users'],
    endpoints: (builder) => ({
        getAllUsers: builder.query<UserServer, void>({
            query: () => `users`,
            providesTags:['users']
        }),
        getSingleUser:builder.query<User,string|number|undefined>({
            query: (id: string) => `users/${id}`,
            providesTags:['users']
        }),
        addNewUser: builder.mutation<NewUserRoot,Omit<NewUserRoot,"user.is_admin">>({
            query(user) {
                const path=user.user.is_admin?'users/admin':'users'
                return {
                    url: path,
                    method: `POST`,
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body:(user)
                }
            },
            invalidatesTags:['users']
        }),
        delUser:builder.mutation<User,number>({
            query:(id)=>{
                return {
                    url:`users/${id}`,
                    method:'DELETE'
                }
            },
            invalidatesTags:['users']
        }),
        updateUser: builder.mutation < User,{idUser:string|number|undefined,dataUser:Omit<UpdateUserRoot,"user.is_admin">}>({
            query: ({idUser,dataUser}) => {


                return {
                    url: `users/${idUser}`,
                    method: 'PUT',
                    headers: {
                        'Content-type':'application/json'
                    },
                    body:(dataUser)
                }
            },
            invalidatesTags:['users']
        })
    })
})

export const {useGetAllUsersQuery,useAddNewUserMutation,useGetSingleUserQuery,useDelUserMutation,useUpdateUserMutation}=actionsUser