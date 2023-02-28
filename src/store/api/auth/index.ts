import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { pathApi } from "..";
import {login} from "../../reducer/tokenSlice";
import {useCookies} from 'react-cookie'

type User={
    username:string,
    password:string
}
type Token={
    access_token:string
}
export const authUser=createApi({
    reducerPath:'authUser',
    baseQuery:fetchBaseQuery({baseUrl:pathApi}),
    tagTypes:['login'],
    endpoints:builder=>({
        sigIn:builder.mutation<Token,User>({
            query(data){
                const body = encodeURIComponent('username')+'='+encodeURIComponent(data.username)
                    +'&&'+
                    encodeURIComponent('password')+'='+encodeURIComponent(data.password)
                return {
                    url:'token',
                    method:'POST',
                    headers:{
                        'Content-type':'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body,
                }
            },
            async onQueryStarted(data,{dispatch,queryFulfilled,getState}){
                const {data:accesToken,meta}=await queryFulfilled
                // const [cookies,setCookie]=useCookies(['token'])
                try{
                    dispatch(login(accesToken.access_token))
                    // setCookie('token',accesToken.access_token)
                }catch(e){
                }
            },
            invalidatesTags:['login']
        })
    })
})

export const {useSigInMutation}=authUser