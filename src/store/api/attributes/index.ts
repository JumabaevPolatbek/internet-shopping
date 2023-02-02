import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Variant } from "@testing-library/react";
import { pathApi } from "..";
import { Attribute, RootAttr, RootAttrCategory } from "../../models/attributes";


export const attributeActions=createApi({
    reducerPath:'attribute',
    baseQuery:fetchBaseQuery({baseUrl:pathApi}),
    tagTypes:['attributes'],
    endpoints:builder=>({
        getAttributes:builder.query({
            query:()=>'attributes',
            providesTags:['attributes']
        }),
        getCategoryAttr:builder.query<RootAttrCategory[],number|undefined>({
            query:(id)=>`categories/${id}/attributes`,
            providesTags:['attributes']
        }),
        addAttribute:builder.mutation<RootAttr,RootAttr>({
            query:(attr)=>({
                url:`attributes`,
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:(attr)
            }),
            invalidatesTags:['attributes']
        }),
        addAttrVariant:builder.mutation<Variant,{id:number,value:Variant}>({
            query:({id,value})=>({
                url:`attributes/${id}/variants`,
                method:'POST',
                headers:{
                    'Content-Type':'application/JSON'
                },
                body:(value)
            }),
            invalidatesTags:['attributes']
        }),
        updateAttribute:builder.mutation<RootAttr,{id:number,attr:Partial<Attribute>}>({
            query:({id,attr})=>({
                url:`attributes/${id}`,
                method:'PUT',
                headers:{
                    'Content-Type':'application/JSON'
                },
                body:(attr)
            }),
            invalidatesTags:['attributes']
        }),
        deleteAttr:builder.mutation<RootAttr,string|undefined>({
            query:(id)=>({
                url:`attributes/${id}`,
                method:'DELETE',
            })
        }),
        delAttrValue:builder.mutation<RootAttr,{idAttr:string,idValue:string}>({
            query:({idAttr,idValue})=>({
                url:`attributes/${idAttr}/variants/${idValue}`,
                method:'DELETE'
            }),
            invalidatesTags:['attributes']
        })
    })
})

export const {useAddAttributeMutation,useGetCategoryAttrQuery}=attributeActions
export default attributeActions.middleware