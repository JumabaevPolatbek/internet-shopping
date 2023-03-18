import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { RootAttr } from '../../../store/models/attributes';
import { AttrVariant } from './AttrVariant';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { decrease } from '../../../store/reducer/addAtrribute';
import { useDispatch } from 'react-redux';
type Props = {
	attr: RootAttr;
	setValue: UseFormSetValue<RootAttr[]>;
	id: number;
};

export const Attribute = React.forwardRef<
	HTMLInputElement,
	Props
>(({ attr, setValue, id }, ref) => {
	const dispatch = useDispatch();
	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement
		>
	) => {
		// setValue(
		// 	'attribute.attribute_name',
		// 	e.target.value
		// );
	};
	console.log(attr);
	return (
		<div className='flex flex-col'>
			<TextField
				label={'Название аттрибута'}
				type='text'
				inputRef={ref}
			/>
			<div>
				Удалить аттрибут
				<Tooltip title='Добавить аттрибут'>
					<IconButton
						onClick={() =>
							dispatch(decrease(id))
						}
					>
						<RemoveCircleOutlineIcon />
					</IconButton>
				</Tooltip>
			</div>
			{/* {attr.variants.map((variant,index)=>
				(
					<AttrVariant
						setValue={setValue}
						value={}
					/>
				)
			)} */}
		</div>
	);
});
