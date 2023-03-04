import React, { Ref } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useGetCategoriesQuery } from '../../store/api/category';
import { StateSearch } from '../../store/api/search/searchSlice';
import { UseFormSetValue } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addIdCategory } from '../../store/api/search/searchSlice';
import { useAppSlector } from '../../utils/hook';

type Props = {
	setTypeFilter: React.Dispatch<
		React.SetStateAction<
			'category' | 'price' | 'attributes' | ' '
		>
	>;
	type: 'category' | 'price' | 'attributes' | ' ';
};

export const AsideBtnsCategory = React.forwardRef<
	HTMLElement,
	Props
>((props, ref) => {
	const { category_id } = useAppSlector(
		(state) => state.searchState
	);
	const dispatch = useDispatch();
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		dispatch(
			addIdCategory(
				+(event.target as HTMLInputElement).value
			)
		);
		if (props.type === ' ') {
			props.setTypeFilter('category');
		}
	};
	const { data } = useGetCategoriesQuery();
	return (
        
		<FormControl>
			<FormLabel id='demo-controlled-radio-buttons-group'>
				Виберите категорию
			</FormLabel>
			<RadioGroup
				aria-labelledby='demo-controlled-radio-buttons-group'
				// name={props.name}
				value={category_id}
				onChange={handleChange}
			>
				{data?.map((category) => (
					<FormControlLabel
						value={category.id}
						control={<Radio />}
						label={category.name}
						key={category.id}
						inputRef={ref}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
});
