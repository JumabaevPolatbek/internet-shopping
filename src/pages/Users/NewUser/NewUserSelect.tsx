import * as React from 'react';
import {  UseFormSetValue } from 'react-hook-form';
import { useGetAllCountriesQuery } from '../../../store/api/countrie';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { NewUserRoot, User } from '../../../store/models/userModels';


type Props = {
   setCountry:UseFormSetValue<NewUserRoot>
}

export function NewUserSelect({setCountry}:Props) {
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
}