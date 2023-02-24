import React from 'react'
import {useLocation} from "react-router-dom";
import {Crumb} from "./Crumb";




export function BreadCrumbs(){
    const location = useLocation()
    return(
        <div>
            <Crumb/>
        </div>
    )
}