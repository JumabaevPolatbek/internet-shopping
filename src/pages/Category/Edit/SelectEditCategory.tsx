import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useGetCategoriesQuery } from '../../../store/api/category';
import { UseFormSetValue } from 'react-hook-form';
import { NewCategories } from '../../../store/models/categories';

type Props={
  setValue:UseFormSetValue<NewCategories>,
  value?:number
}
export const  SelectEditCategory=React.forwardRef<HTMLSelectElement,Props>(({setValue,value},ref)=> {
  const {data}=useGetCategoriesQuery()
  const [category, setCategory] = React.useState(data?.find(category=>category.id===value)?.name);
  console.log(data?.find(category=>category.id===value)?.name)
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
    setValue('parent_category_id',+event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 ,marginTop:2}}>
      {/* <FormControlLabel inputRef={ref}> */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" >Категория</InputLabel>
        {data && <Select
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
              >{category.name}</MenuItem>
            })}
          </Select>}
      </FormControl>
      {/* </FormControlLabel> */}
    </Box>
  );
})