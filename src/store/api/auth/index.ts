import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { pathApi } from "..";
// import {signIn} from "../../reducer/authSlice";

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
                    url:'token',
                    method:'POST',
                    headers:{
                        'Content-type':'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body,
                    // credentials:'include'
                }
            },
            // async onQueryStarted(data,{dispatch,queryFulfilled,getState}){
            //     const {data:accesToken,meta}=await queryFulfilled
            //     try{
            //         dispatch(signIn({username:data.username,token:`${accesToken.access_token}`}))
            //     }catch(e){
            //     }
            // },
            invalidatesTags:['login']
        })
    })
})

export const {useSigInMutation}=authUser