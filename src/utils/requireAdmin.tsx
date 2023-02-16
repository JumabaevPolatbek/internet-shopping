import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import { Decode } from "../store/models/jwtDecode";
type Props={
    children?:React.ReactNode
}


export const RequireAdmin:React.FC<Props>=({children})=> {
    const cookie = new Cookies()
    const decode:Decode=jwtDecode(cookie.get('token'))
    if (decode.is_admin===0) {
        return <Navigate to='/' replace/>
    }
    return (
        <>
            {children}
        </>
    )
}