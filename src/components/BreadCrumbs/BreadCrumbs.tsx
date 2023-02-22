import React from 'react'
import {useLocation} from "react-router-dom";
import {Crumb} from "./Crumb";




export function BreadCrumbs(){
    const location = useLocation()
    console.log(location)
    return(
        <div>
            <Crumb/>
        </div>
    )
}