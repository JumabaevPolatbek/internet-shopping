import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';
import { useGetNestChildCategoryQuery } from '../../store/api/category';
import { Collapse, Divider } from "@mui/material";
import { NestedList } from './NestedList';
import {NavLink} from "react-router-dom";

const activeClass="flex justify-between items-center py-2 px-4 bg-slate-400 text-white hover:bg-slate-400 transition-colors cursor-pointer"
const defClass="flex justify-between items-center py-2 px-4 bg-[#da002b] text-white hover:bg-slate-400 transition-colors cursor-pointer"

export function ChildList({ name,parent }: { name: string,parent?:number }) {
    const {data}=useGetNestChildCategoryQuery()
    const [open, setOpen] = React.useState(false)
    return (
        <div className='relative'>
            <div
                className={open ? activeClass : defClass}
            >
                <NavLink
                    to={`/category/${parent}`}
                    state={parent}
                    className="text-white pl-4"
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
            {open && 
                <Collapse
                    in={open}
                    orientation="horizontal"
                    collapsedSize={40}
                    sx={{ position: 'absolute', right: -98, top: 0 }}>
                        {
                        data?.filter(nest => nest.parent_category?.id === parent).map(category => {
                            return <NestedList key={category.id} name={ category.name} id={category.id}/>
                            })
                        }
                    </Collapse>
                }
                <Divider/>
        </div>
    )
}