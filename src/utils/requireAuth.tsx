import React from "react";
import { useLocation } from "react-router-dom";

type Props = {
    children:React.FC
}

export function RequireAuth({children}:Props) {
    const location = useLocation();
    const auth = false;
    if (!auth) {
        return
    }
    return children
}