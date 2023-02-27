import React from 'react'
import {NavLink, useLocation} from "react-router-dom";
import {Breadcrumbs} from "@mui/material";
import {useGetCategoryQuery} from "../../store/api/category";
import HomeIcon from '@mui/icons-material/Home';

type Arr ={
    id?:number|undefined
    name?:string|undefined
}



export function BreadCrumbs(){
    const {state} = useLocation()
    const {data}=useGetCategoryQuery(state.category.parent_category.id)
    const arrCrumbs:Arr[]=[]

    if(data?.parent_category!==null){
        arrCrumbs.push({
            id:data ? data.parent_category?.id : undefined,
            name:data ? data.parent_category?.name : undefined
        },{
            id:data ? data.id:undefined,
            name: data ? data.name:undefined
        },{
            id:state.category.id,
            name:state.category.name
        })
    }
    console.log('array',arrCrumbs)
    return(
        <div>
            <Breadcrumbs aria-label="breadcrumbs">
                    <NavLink to={'/'}>
                        <HomeIcon/>
                    </NavLink>
                {arrCrumbs.map(crumb=>{
                    return (
                        <NavLink
                            to={'/category/'+crumb.id || '/'}
                            state={crumb}
                            className={`${crumb.name===state.category.name ? 'text-[#da002b]':''} block py-2`}
                            key={crumb.id}
                        >
                            {crumb.name}
                        </NavLink>
                    )
                })}
            </Breadcrumbs>
        </div>
    )
}