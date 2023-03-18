import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { RootAttrCategory } from '../../../store/models/attributes';
import { VariantTableCell } from './VariantTableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import {
	CircularProgress,
	IconButton,
	Tooltip,
} from '@mui/material';
import { useDeleteAttrMutation } from '../../../store/api/admin';
import { toast } from 'react-toastify';
export function Attribute({
	attribute_name,
	variants,
	id,
}: RootAttrCategory) {
	const [remove, result] = useDeleteAttrMutation();
	const handleRemove = async () =>
		await remove(id)
			.then((response) =>
				toast.success('Успешьноо!!', {
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
				toast.error('Ошибка', {
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
		<TableRow
			key={attribute_name}
			sx={{
				'&:last-child td, &:last-child th': {
					border: 0,
				},
			}}
		>
			<TableCell>
				<div className='flex items-center justify-between py-2'>
					{attribute_name}
					<Tooltip title='Удаление аттрибута'>
						<IconButton
							color='info'
							onClick={handleRemove}
							disabled={result.isLoading}
						>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				</div>
			</TableCell>
			{variants.map((variant) => (
				<VariantTableCell
					{...variant}
					id_attr={id}
					key={variant.value}
				/>
			))}
		</TableRow>
	);
}
