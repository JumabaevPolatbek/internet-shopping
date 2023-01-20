import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pathApi } from '..';
import { UserServer,NewUserRoot, User, UpdateUserRoot } from '../../models/userModels';

export const actionsUser = createApi({
    reducerPath: 'actionsUser',
    baseQuery: fetchBaseQuery({ baseUrl: pathApi}),
    endpoints: (builder) => ({
        getAllUsers: builder.query<UserServer, void>({
            query:()=>`users`
        }),
        getSingleUser:builder.query<User,string>({
            query :(id:string)=>`users/${id}`
        }),
        addNewUser: builder.mutation<NewUserRoot,Partial<NewUserRoot>>({
            query(user) {
                return {
                    url: `users`,
                    method: 'POST',
                    headers: {
                        'Content-type':'application/json: charset=UTF-8'
                    },
                    body:(user)
                }
            }
        }),
        delUser:builder.mutation<User,number>({
            query:(id)=>{
                return {
                    url:`users/${id}`,
                    method:'DELETE'
                }
            }
        })
        // updateUser:builder.mutation<UpdateUserRoot,Partial<UpdateUserRoot>({
        //     query:(user:UpdateUserRoot,id:string)=>{
        //         return {
        //             url:`users/${id}`,
        //             method:'PUT',
        //             headers:{
        //                 'Content-type':'application/json: charset=UTF-8'
        //             },
        //             body:JSON.stringify(user)
        //         }
        //     }
        // })
    })
})

export const {useGetAllUsersQuery,useAddNewUserMutation,useGetSingleUserQuery,useDelUserMutation}=actionsUser