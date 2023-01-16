import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useGetCategoriesQuery } from '../../store/api/category';

export function CategorySelect(props: any) {
  console.log(props)
    const {data}=useGetCategoriesQuery()
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
    props.onChange()
  };

  return (
    <Box sx={{ minWidth: 120 ,marginTop:2}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="category"
          onChange={handleChange}
        
        >
          {data?.map(category=>{
            return <MenuItem
              key={category.name}
              value={category.id}
              ref={props.ref}
            >{category.name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  );
}