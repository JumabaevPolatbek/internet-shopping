import {
	CircularProgress,
	IconButton,
	TableCell,
	Tooltip,
} from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDelAttrValueMutation } from '../../../store/api/admin';
import { toast } from 'react-toastify';
type Props = {
	value: string;
	id: number;
	id_attr: number;
};

export function VariantTableCell({
	value,
	id,
	id_attr,
}: Props) {
	const [removeVariant, result] =
		useDelAttrValueMutation();
	const handleRemoveVariant = async () =>
		await removeVariant({
			idAttr: id_attr,
			idValue: id,
		})
			.then((response) =>
				toast.success('Успешно!', {
					position: 'bottom-left',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'colored',
				})
			)
			.catch((error) =>
				toast.error('Ошибка!', {
					position: 'bottom-left',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'colored',
				})
			);
	return (
		<TableCell padding='normal'>
			<div className='flex items-center'>
				{value}
				<Tooltip title='Удаление варианта'>
					<IconButton
						color='error'
						onClick={handleRemoveVariant}
						disabled={result.isLoading}
					>
						<CloseIcon />
					</IconButton>
				</Tooltip>
			</div>
		</TableCell>
	);
}
