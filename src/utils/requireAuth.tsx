import React from "react";
import { useAppSlector } from "./hook";
import { Navigate,useLocation } from "react-router-dom";
import { Cookies } from "react-cookie";

type Props = {
    children?:React.ReactNode
}

export const RequireAuth:React.FC<Props>=({ children })=> {
    const cookie = new Cookies()
    const location = useLocation()
    // const userState = useAppSlector(state => state.userAuth);
    if (!cookie.get('token')) {
        console.log('OK')
        return <Navigate to='login' state={{from:location}}/>
    }
    return (
        <>
            {children}
        </>
    )
}