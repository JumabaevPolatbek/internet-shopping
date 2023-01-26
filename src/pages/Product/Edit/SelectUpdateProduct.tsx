import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useGetCategoriesQuery } from '../../../store/api/category';
import { UseFormSetValue } from 'react-hook-form';
import {  UpdateProduct } from '../../../store/models/products';

type Props={
  setValue: UseFormSetValue<UpdateProduct>,
  categoryProduct?:string
}
type Ref=HTMLSelectElement
export const  SelectUpdateProduct=React.forwardRef<Ref,Props>(({setValue,categoryProduct},ref)=> {
  const {data}=useGetCategoriesQuery()
  const [category, setCategory] = React.useState(categoryProduct||'');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
    setValue('category_id',+event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 ,marginTop:2}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Категория"
          onChange={handleChange}
        
        >
          {data?.map(category=>{
            return <MenuItem
              key={category.name}
              value={category.id}
            >{category.name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  );
})