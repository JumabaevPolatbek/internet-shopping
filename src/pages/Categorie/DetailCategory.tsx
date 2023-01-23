import * as React from 'react';
import { useGetCategoriesQuery } from '../../store/api/category';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { ListItemDetail } from '../Dashboard/ListItemsDetail';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export  function DetailCategory() {
  const {data} = useGetCategoriesQuery()
  const location = useLocation()
  return (
    <div className='flex flex-col items-center p-[15px]'>
      {
        location.pathname.includes('admin/category') &&  <Button
          variant='contained'
          color='success'
          className='self-start'
        >
          <Link to={'add'}>Create Category</Link>
          </Button>
      }
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Католог категории
            </ListSubheader>
          }
        >
          {data?.map(category=>{
            // if(category.parent_category===null){
            //   return (
            //     <ListItemDetail category={category} key={category.id}/>
            //   )
            // }
            return (
              <ListItemDetail category={category} key={category.id}/>
            )
          })}
        </List>
    </div>
  );
}
