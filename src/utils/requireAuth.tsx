import React from "react";
import { useAppSlector } from "./hook";
import { Navigate } from "react-router-dom";

type Props = {
    children:React.FC
}

export function RequireAuth({children}:Props) {
    const userState=useAppSlector(state=>state.userAuth);
    if (!userState.token) {
        return <Navigate to='login'/>
    }
    return children
}