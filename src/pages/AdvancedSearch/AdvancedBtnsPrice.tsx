import { TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
	maxPrice,
	minPrice,
} from '../../store/api/search/searchSlice';

type Props = {
	setTypeFilter: React.Dispatch<
		React.SetStateAction<
			'category' | 'price' | 'attributes' | ' '
		>
	>,
    type:'category' | 'price' | 'attributes' | ' '
};

export const AdvancedBtnsPrice = (props:Props) => {
	const dispatch = useDispatch();
	const changeMinPrice = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		dispatch(
			minPrice(+(e.target as HTMLInputElement).value)
		);
        if(props.type===' ' || props.type==='category'){
            props.setTypeFilter('price')
        }
	};
	const changeMaxPrice = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		dispatch(
			maxPrice(+(e.target as HTMLInputElement).value)
		);
	};
	return (
		<div className='flex flex-col'>
			<Typography
				variant='h6'
				color='error'
			>
				По цену
			</Typography>
			<TextField
				type='number'
				label='Минимум'
				sx={{
					margin: '10px 0',
				}}
				onChange={changeMinPrice}
			/>
			<TextField
				label='Максимум'
				type='number'
				onChange={changeMaxPrice}
			/>
		</div>
	);
};
