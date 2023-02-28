import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import { useGetParentCategoryQuery } from '../../store/api/category';
import { ItemParent } from './ItemParent';
import Paper from "@mui/material/Paper";

export function MenuCategory({ display }: { display: boolean }) {
    const {data}=useGetParentCategoryQuery()

    return (
        <Paper
            elevation={3}
        >
        <Collapse in={display}>
            <div className='flex flex-col'>
            {data?.map(category => {
                return <ItemParent key={category.id} name={category.name} parent_id={category.id}/>
                })}
            </div>
            </Collapse>
        </Paper>
        )
            ;
}