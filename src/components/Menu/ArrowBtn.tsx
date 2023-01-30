import React from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ChildList } from "./Child";

export function ArrowBtn({parent_id}:{parent_id?:number}) {
    const [open,setOpen]=React.useState(false)
    return (
        <>
        <IconButton
                                onClick={()=>setOpen(open=>!open)}
                                color={`${open?'primary':'error'}`}
                            >
                                {open ?
                                    <KeyboardArrowUpIcon /> :
                                    <KeyboardArrowDownIcon/>}
            </IconButton>
            {parent_id && <ChildList parent_id={parent_id} display={ open} />}
            </>
            )
}