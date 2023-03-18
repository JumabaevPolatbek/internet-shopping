import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { RootAttr } from '../../../store/models/attributes';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import { useDispatch } from 'react-redux';
import { decrease } from '../../../store/reducer/addAtrribute';
type Props = {
	value: string;
	id: number;
	setValue: UseFormSetValue<RootAttr>;
};

export const AddAttrVariant = React.forwardRef<
	HTMLInputElement,
	Props
>(({ value, id, setValue }, ref) => {
	const dispatch = useDispatch();
	return (
		<div>
			<TextField
				label={`Варианты аттрибута`}
				type='text'
				inputRef={ref}
				onChange={(e) =>
					setValue(
						`variants.${id}.value`,
						e.target.value
					)
				}
			/>
			<Tooltip title='Удалить вариант'>
				<IconButton
					onClick={() =>
						dispatch(decrease(value))
					}
				>
					<TextDecreaseIcon />
				</IconButton>
			</Tooltip>
		</div>
	);
});
