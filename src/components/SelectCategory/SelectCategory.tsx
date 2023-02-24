import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { UseFormSetValue } from 'react-hook-form';
import {  NewCategories } from '../../store/models/categories';
import { ListSubheader } from '@mui/material';

type Props = {
  setName:UseFormSetValue<NewCategories>
}
type Ref=HTMLSelectElement

export const SelectCategory=React.forwardRef<Ref,Props>(({ setName },ref)=> {
  
  // const {data}=useGetCategoriesQuery()
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    setName('parent_category_id',+event.target.value)
  };
  
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Категория</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Родительские катогероии"
          onChange={handleChange}
          inputRef={ref}
        >
         {/* {data?.map(category => {*/}
         {/*   */}
         {/* return (*/}
         {/*   <MenuItem key={category.id} value={category.id}>*/}
         {/*       {category.name}*/}
         {/*   </MenuItem>*/}
         {/* )*/}
         {/*})}*/}
        </Select>
      </FormControl>
    </div>
  );
})