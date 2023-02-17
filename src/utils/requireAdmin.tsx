import React from "react";
import { Navigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { getCookie } from "./getCookie";
type Props={
    children?:React.ReactNode
}


export const RequireAdmin:React.FC<Props>=({children})=> {
    const cookie = new Cookies()
    if (getCookie(cookie)?.is_admin === 0) {
        return <Navigate to="/" replace/>
    }
    return (
        <>
            {children}
        </>
    )
}