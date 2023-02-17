import React from "react";
import { useAppSlector } from "./hook";
import { Navigate,useLocation,useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

type Props = {
    children?:React.ReactNode
}

export const CheckAuth:React.FC<Props>=({ children })=> {
    const cookie = new Cookies()
    const location = useLocation()
    if (cookie.get('token')) {
        return <Navigate to='/' state={{from:location}} replace/>
    } 
    return (
        <>
            {children}
        </>
    )
}