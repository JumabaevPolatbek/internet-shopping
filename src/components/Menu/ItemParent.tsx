import React from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ChildList } from "./Child";
import { Collapse, Divider } from "@mui/material";
import { useChildCategoryQuery } from "../../store/api/category";

export function ItemParent({ name,parent_id }: { name:string,parent_id?:number}) {
    const [open, setOpen] = React.useState(false)
    const { data } = useChildCategoryQuery()
    return (
        <>
        <div
            className="flex justify-between items-center py-2 px-4 hover:bg-slate-400 hover:text-white transition-colors cursor-pointer"
            onClick={()=>setOpen(open=>!open)}
        >
            {name}
            {open ? 
                <KeyboardArrowUpIcon/>:
                <KeyboardArrowDownIcon /> 
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