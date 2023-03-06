import React from 'react'
import {NavLink, useLocation} from "react-router-dom";
import {Breadcrumbs} from "@mui/material";
import {useGetCategoryQuery} from "../../store/api/category";
import HomeIcon from '@mui/icons-material/Home';


export function BreadCrumbs(){
    const {state} = useLocation()
    const {data}=useGetCategoryQuery(state.category.parent_category.id)
    console.log(state)
    console.log(data)
    return(
        <div>
            <Breadcrumbs aria-label="breadcrumbs">
                <NavLink
                    to='/'
                >
                    <HomeIcon/>
                </NavLink>
            </Breadcrumbs>
        </div>
    )
}