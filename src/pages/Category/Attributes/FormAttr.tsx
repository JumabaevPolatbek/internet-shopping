import React from 'react';
import {
	useAppDispatch,
	useAppSlector,
} from '../../../utils/hook';
import {
	increaseVariant,
	increase,
	decrease,
} from '../../../store/reducer/addAtrribute';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAddAttributeMutation } from '../../../store/api/attributes';
import { RootAttr } from '../../../store/models/attributes';
import { Button, IconButton, Tooltip } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Attribute } from './Attribute';
type Props = {
	id?: number;
	open?: boolean;
};

export function FormAttr({ id, open }: Props) {
	const attrState = useAppSlector(
		(state) => state.stateAttribute
	);
	const dispatch = useAppDispatch();
	const [add, result] = useAddAttributeMutation();
	const {
		handleSubmit,
		formState,
		register,
		reset,
		setValue,
	} = useForm<RootAttr>();
	const formSubmit: SubmitHandler<RootAttr> = (data) =>
		console.log(data);
	const handleClick = () => {
		if (result.isSuccess) {
			reset();
		}
	};
	return (
		<form
			className='flex flex-col h-full'
			onSubmit={handleSubmit(formSubmit)}
		>
			
			<Button
				type='submit'
				variant='contained'
				color='success'
				sx={{ marginTop: 'auto' }}
				onClick={handleClick}
			>
				Сохранить
			</Button>
		</form>
	);
}
