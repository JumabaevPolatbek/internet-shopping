import React from 'react';
import { Paper } from '@mui/material';
import { useGetCategoryAttrQuery } from '../../../store/api/attributes';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {
	SelectChangeEvent,
} from '@mui/material/Select';
type Props = {
	category_id: number;
};

function Attribute({ category_id }: Props) {
	const { data: categoryAttrs } =
		useGetCategoryAttrQuery(category_id);
	const [age, setAge] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};
	return (
		<Paper>
			{/* <Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>
						Age
					</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={age}
						label='Выберите аттрибут'
						onChange={handleChange}
					></Select>
				</FormControl>
			</Box> */}
		</Paper>
	);
}

export { Attribute };
