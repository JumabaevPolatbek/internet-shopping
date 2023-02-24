import React from 'react'
import {useLocation, useParams} from "react-router-dom";
import {Breadcrumbs} from "@mui/material";
import {useGetCategoryQuery} from "../../store/api/category";




export function BreadCrumbs(){
    const {state} = useLocation()
    const {name}=useParams()
    const {data}=useGetCategoryQuery(state.category.parent_category.id)
    console.log(state)
    console.log(data)
    return(
        <div>
            <Breadcrumbs aria-label="breadcrumbs">

            </Breadcrumbs>
        </div>
    )
}