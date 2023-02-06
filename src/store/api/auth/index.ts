import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { pathApi } from "..";
import {signIn} from "../../reducer/authSlice";

type User={
    username:string,
    password:string
}
type Token={
    access_token:string|null
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
                    url:'login',
                    method:'POST',
                    headers:{
                        'Content-type':'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body
                }
            },
            async onQueryStarted(data,{dispatch,queryFulfilled,getState}){
                console.log('started')
                const {data:accesToken,meta}=await queryFulfilled
                console.log(typeof accesToken)
                try{
                    dispatch(signIn({username:data.username,token:`${accesToken.access_token}`}))
                }catch(e){
                    console.log(getState().authUser)
                    console.log(e)
                    console.log(meta)
                }
            },
            invalidatesTags:['login']
        })
    })
})

export const {useSigInMutation}=authUser