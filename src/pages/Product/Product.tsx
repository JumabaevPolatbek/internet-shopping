import TableCell from '@mui/material/TableCell';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { Product } from '../../store/models/products';
import { useDeleteProductMutation } from '../../store/api/product';
import { toast } from 'react-toastify';
import CustomizedDialogs from '../../components/BootstrapDialog/CustomizedDialogs';
import { EditProduct } from './Edit/EditProduct';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import { Attribute } from './Attributes/Attribute';

export function PageProduct(props: Product) {
	const {
		name,
		images,
		description,
		category,
		quantity,
		discount,
		price,
		id,
	} = props;
	const [open, setOpen] = React.useState(false);
	const [attr, setAttr] = React.useState(false);
	const [delProduct, result] = useDeleteProductMutation();
	const handleDelProduct = async (
		id: number,
		name: string
	) =>
		await delProduct(id)
			.unwrap()
			.then((response) =>
				toast.success(
					`${name} продукт успешьно удалень`,
					{
						position: 'top-right',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'colored',
					}
				)
			)
			.catch((error) =>
				toast.error(`${error.data.detail}`, {
					position: 'top-right',
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
		<TableRow>
			<TableCell>
				<Avatar
					sx={{ width: '56px', height: '56px' }}
					src={images[0].image_path}
				/>
			</TableCell>
			<TableCell>{name}</TableCell>
			<TableCell>{description}</TableCell>
			<TableCell>{category.name}</TableCell>
			<TableCell>{price}</TableCell>
			<TableCell>{quantity}</TableCell>
			<TableCell>{discount}</TableCell>
			<TableCell>
				<div className='flex items-center'>
					<Tooltip title='Добавление аттрибута'>
						<IconButton
							onClick={() => setAttr(true)}
						>
							<EditAttributesIcon color='error' />
						</IconButton>
					</Tooltip>
					<CustomizedDialogs
						open={attr}
						setOpen={setAttr}
					>
						<Attribute
							category_id={category.id}
						/>
					</CustomizedDialogs>
					<Tooltip
						title='Изменение продукта'
						arrow
					>
						<IconButton
							color='secondary'
							onClick={() => setOpen(true)}
						>
							<SettingsIcon />
						</IconButton>
					</Tooltip>
					<CustomizedDialogs
						open={open}
						setOpen={setOpen}
					>
						<EditProduct
							product={props}
							setOpen={setOpen}
						/>
					</CustomizedDialogs>
					<Tooltip
						title='Delete Product'
						arrow
					>
						<IconButton
							color='primary'
							onClick={() =>
								handleDelProduct(id, name)
							}
						>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				</div>
			</TableCell>
		</TableRow>
	);
}
