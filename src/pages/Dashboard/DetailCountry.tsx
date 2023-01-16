import * as React from 'react';
// import { useGetAllCountriesQuery } from '../../store/api/countrie';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
// import { ListItemDetail } from './ListItemsDetail';


export  function DetailCountry() {
 
    // const {data}=useGetAllCountriesQuery()

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Список стран
        </ListSubheader>
      }
    >
      
    </List>
  );
}