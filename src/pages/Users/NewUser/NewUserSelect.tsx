import * as React from 'react';
import {  RefCallBack, UseFormSetValue } from 'react-hook-form';
import { useGetAllCountriesQuery } from '../../../store/api/countrie';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { NewUserRoot, User } from '../../../store/models/userModels';


type Props = {
  setCountry: UseFormSetValue<NewUserRoot>
}
type SelectRef=HTMLSelectElement

export const NewUserSelect=React.forwardRef<SelectRef,Props>(({setCountry},ref)=> {
    // console.log(onChange)
    const {data} = useGetAllCountriesQuery()
  const [countryName, setCountryName] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCountryName(event.target.value);
        setCountry('user_address.country_id',+event.target.value)
        // console.log(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Страна</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          inputRef={ref}
          id="demo-simple-select"
          value={countryName}
          label="Страна"
                  onChange={handleChange}
              >
                  {data?.map(country => {
                      return <MenuItem key={country.country_name} value={country.id}>{country.country_name }</MenuItem>
                  })}
        </Select>
      </FormControl>
    </Box>
  );
})