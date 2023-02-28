import { Divider } from '@mui/material';
import React from 'react';
import {NavLink} from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export function NestedList({name,id}:{name:string,id?:number}) {
    return (
        <>
            <div
                className="flex justify-between items-center py-2 px-4 bg-[#da002b] text-white hover:bg-slate-400 transition-colors cursor-pointer"
            >
                <NavLink
                    to={`/category/${id}`}
                    state={id}
                    className="text-white"
                >
                    {name}
                </NavLink>
            </div>
            <Divider/>
            </>
    )
}