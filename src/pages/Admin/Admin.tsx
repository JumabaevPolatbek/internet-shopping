import React from "react";
import {Header} from "./Header";
import { SideBarAdmin } from "./SideBarAdmin";
import {useAppSlector} from "../../utils/hook";

export const Admin:React.FC=()=> {
    const {token}=useAppSlector(state=>state.token)
    return (
        <div className=" flex items-start">
            <SideBarAdmin/>
            <Header/>
        </div>
    )
}