import React from "react";
import { useLocation } from "react-router-dom";
import { useAppSlector } from "./hook";


type Props = {
    children:React.FC
}

export function RequireAuth({children}:Props) {
    const userState=useAppSlector(state=>state.userAuth)
    const location = useLocation();
    const auth = false;
    if (!auth) {
        return
    }
    return children
}