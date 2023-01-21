import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { UseFormSetValue } from 'react-hook-form';
import { NewUserRoot } from '../../../store/models/userModels';

type Props = {
    setType:UseFormSetValue<NewUserRoot>
}

export  function NewUserTypePhone({setType}:Props) {
  const [phone, setPhone] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
      setPhone(event.target.value as string);
      setType('user_phones.0.type',event.target.value)
  };

  return (
    <Box sx={{ minWidth: 150 }} className='flex-1'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-helper-label">Тип номер тел.</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={phone}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'mobile'}>Мобильный номер</MenuItem>
          <MenuItem value={'work'}>Номер рабочего места</MenuItem>
          <MenuItem value={'home'}>Номер домашний</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}