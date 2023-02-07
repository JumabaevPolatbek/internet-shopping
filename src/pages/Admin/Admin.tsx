import React from "react";
import {Header} from "./Header";
import { SideBarAdmin } from "./SideBarAdmin";

export const Admin:React.FC=()=> {

    return (
        <div className=" flex items-start">
            <SideBarAdmin/>
            <Header/>
        </div>
    )
}