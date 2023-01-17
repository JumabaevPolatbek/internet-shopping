import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { UseFormSetValue } from 'react-hook-form';
import { Categories, Category, NewCategories } from '../../store/models/categories';
import { Product } from '../../store/models/products';
import { Countrie } from '../../store/models/countries';
// import { SelectData } from '../../utils/selectData';
import { useGetCategoriesQuery } from '../../store/api/category';
import { useGetProductsQuery } from '../../store/api/product';

type Props ={
    type:string,
    setCategory?:UseFormSetValue<Category>,
    setCountry?:UseFormSetValue<Countrie>,
    setProduct?:UseFormSetValue<Product>,
    setNewCategory?:UseFormSetValue<NewCategories>
}

export  function SelectLabels({type,setNewCategory}:Props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{type==='category'?'Категория':'Страны'}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label={type==='category'?'Категория':'Страны'}
          onChange={handleChange}
        >
          {
            
          }
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    </div>
  );
}