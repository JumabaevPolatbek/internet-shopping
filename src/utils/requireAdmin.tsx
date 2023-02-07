import React, { ReactNode } from "react";
import { useAppSlector } from "./hook";
import { Navigate } from "react-router-dom";
import { useGetAllUsersQuery } from "../store/api/user";

type Props={
    children:JSX.Element
}


export const RequireAdmin:React.FC<Props>=({children})=> {
    const userState=useAppSlector(state=>state.userAuth);
    const {data}=useGetAllUsersQuery();
    const user = data?.find(item=>item.username===userState.username)
    if (user?.is_admin) {
        return <Navigate to='/login'/>
    }
    return children
}