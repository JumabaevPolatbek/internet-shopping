import * as React from 'react';
import { useGetCategoriesQuery } from '../../store/api/category';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { ListItemDetail } from './ListItemsDetail';



export  function DetailCategory() {
  const {data} = useGetCategoriesQuery()
 console.log(data)

  return (
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
        if(category.parent_category===null){
          return (
            <ListItemDetail category={category} key={category.id}/>
          )
        }
        
      })}
    </List>
  );
}
