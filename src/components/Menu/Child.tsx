import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';
import { useNestChildCategoryQuery } from '../../store/api/category';
import { Collapse, Divider } from "@mui/material";
import { NestedList } from './NestedList';

export function ChildList({ name,parent }: { name: string,parent?:number }) {
    const {data}=useNestChildCategoryQuery()
    const [open, setOpen] = React.useState(false)
    return (
        <div className='relative'>
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
            {open && 
                <Collapse
                    in={open}
                    orientation="horizontal"
                    collapsedSize={40}
                    sx={{ position: 'absolute', right: -110, top: 0 }}>
                        {
                        data?.filter(nest => nest.parent_category?.id === parent).map(category => {
                            return <NestedList key={category.id} name={ category.name} />
                            })
                        }
                    </Collapse>
                }
                <Divider/>
        </div>
    )
}