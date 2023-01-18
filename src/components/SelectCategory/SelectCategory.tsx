import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { UseFormSetValue } from 'react-hook-form';
import {  NewCategories } from '../../store/models/categories';
import { useGetCategoriesQuery } from '../../store/api/category';

type Props = {
  setName:UseFormSetValue<NewCategories>
}

export function SelectCategory({ setName }: Props) {
  
  const {data}=useGetCategoriesQuery()
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
        >
          {data?.map(category => {
            if (category.parent_category !== null) {
              return <MenuItem
                value={category.parent_category?.id}
                key={category.parent_category?.id}
              >{category.parent_category?.name}
              </MenuItem>
           }
         })}
        </Select>
      </FormControl>
    </div>
  );
}