import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ChildList } from "./Child";
import { Collapse, Divider } from "@mui/material";
import { useGetChildCategoryQuery } from "../../store/api/category";
import {NavLink} from "react-router-dom";

const activeClass="flex justify-between items-center py-2 px-4 bg-slate-400 text-white hover:bg-slate-400 transition-colors cursor-pointer"
const defClass="flex justify-between items-center py-2 px-4 bg-[#da002b] text-white hover:bg-slate-400 transition-colors cursor-pointer"

export function ItemParent({ name,parent_id }: { name:string,parent_id?:number}) {
    const [open, setOpen] = React.useState(false)
    const { data } = useGetChildCategoryQuery()
    return (
        <>
        <div
            className={open?activeClass:defClass}
        >
            <NavLink
                to={`/category/${parent_id}`}
                state={parent_id}
                className="text-white"
            >
                {name}
            </NavLink>
            {open ?
                <KeyboardArrowUpIcon
                    onClick={()=>setOpen(false)}
                />:
                <KeyboardArrowDownIcon
                    onClick={()=>setOpen(true)}
                />
            }
            </div>
           
            <Collapse in={open} orientation="vertical">
                {
                    data?.filter(parent => parent.parent_category?.id === parent_id).map(category => {
                        if(open){
                        return (
                            <ChildList key={category.id} name={category.name} parent={ category.id} />
                        )}
                    })
                }
            </Collapse>
            <Divider/>
            </>
            )
}