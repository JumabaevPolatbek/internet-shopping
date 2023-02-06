import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { pathApi } from "..";

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
        sigIn:builder.mutation<Token,string>({
            query(data){
                
                return {
                    url:'login',
                    method:'POST',
                    headers:{
                        'Content-type':'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body:(data)
                }
            },
            async onQueryStarted(data,{dispatch,queryFulfilled,getState}){
                console.log('started')
                const {data:accesToken,meta}=await queryFulfilled
                try{
                    console.log(accesToken)
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