import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import { useParentCategoryQuery } from '../../store/api/category';
import { ItemParent } from './ItemParent';

export function MenuCategory({ display }: { display: boolean }) {
    const {data}=useParentCategoryQuery()
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

    return (
        <Collapse in={display}>
            <div className='flex flex-col py-2'>
            {data?.map(category => {
                return <ItemParent key={category.id} name={category.name} parent_id={category.id}/>
                })}
            </div>
            </Collapse>
        );
}