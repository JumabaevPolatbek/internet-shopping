import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { UseFormSetValue } from 'react-hook-form';
import { NewProduct, UpdateProduct } from '../../store/models/products';
import {useAppSlector} from "../../utils/hook";
import {actionsCategories} from "../../store/api/category";
import {useSelector} from "react-redux";

type Props={
  setValue:UseFormSetValue<NewProduct>,
}
type Ref=HTMLSelectElement
export const  CategorySelect=React.forwardRef<Ref,Props>(({setValue},ref)=> {
  const state=useSelector(state=>state)
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
    setValue('product.category_id',+event.target.value)
  };
  console.log(state)
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
          {/*{data?.map(category=>{*/}
          {/*  return <MenuItem*/}
          {/*    key={category.name}*/}
          {/*    value={category.id}*/}
          {/*  >{category.name}</MenuItem>*/}
          {/*})}*/}
        </Select>
      </FormControl>
    </Box>
  );
})