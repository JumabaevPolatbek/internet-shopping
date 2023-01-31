import { Divider } from '@mui/material';
import React from 'react';

export function NestedList({name}:{name:string}) {
    return (
        <>
        <div
            className="text-center py-2 px-4 hover:bg-slate-400 hover:text-white transition-colors cursor-pointer"
        >
            {name}
           
            </div>
            <Divider/>
            </>
    )
}