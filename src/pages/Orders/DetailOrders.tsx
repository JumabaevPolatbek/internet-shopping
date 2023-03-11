import * as React from 'react';
import { useGetSingleUserQuery } from '../../store/api/user';
import { ResponseOrders } from '../../store/models/orders';
import { useGetSingleCountrieQuery } from '../../store/api/country';
import { useDelOrderMutation } from '../../store/api/admin';
import { toast } from 'react-toastify';
import { OrderProducts } from './OrderProducts';
import TableCell from '@mui/material/TableCell';
import { IconButton, Tooltip } from '@mui/material';
import CustomizedDialogs from '../../components/BootstrapDialog/CustomizedDialogs';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import { AddOrderStatus } from './AddOrderStatus';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { EditOrder } from './EditOrder';

export function DetailOrders(props: ResponseOrders) {
	const {
		order_status,
		order_details,
		order_date,
		address_id,
		user_id,
		order_status_id,
		id,
	} = props;
	const { data: user } = useGetSingleUserQuery(user_id);
	const { data: city } =
		useGetSingleCountrieQuery(address_id);
	const [open, setOpen] = React.useState(false);
	const [products, setProducts] = React.useState(false);
	const [delOrder, resultOrder] = useDelOrderMutation();
	const handleDelOrder = async (
		order_id: number,
		user_id: number
	) =>
		await delOrder({ user_id, order_id })
			.unwrap()
			.then((response) =>
				toast.success('Успешно удалень!', {
					position: 'top-right',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'light',
				})
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
					theme: 'light',
				})
			);
	return (
		<TableRow>
			<TableCell>
				{user ? user.username : ''}
			</TableCell>
			<TableCell>
				Продукты
				<IconButton
					onClick={() =>
						setProducts((products) => !products)
					}
				>
					<AutoAwesomeMotionIcon />
				</IconButton>
				<CustomizedDialogs
					open={products}
					setOpen={setProducts}
				>
					{order_details?.map((product) => (
						<OrderProducts
							id={product.product_id}
							key={product.product_id}
						/>
					))}
				</CustomizedDialogs>
			</TableCell>
			<TableCell>{order_status.status}</TableCell>
			<TableCell>
				{city ? city.country_name : ''}
			</TableCell>
			<TableCell>{order_date}</TableCell>
			<TableCell>
				<div className='flex items-center'>
					<Tooltip
						title='Изменение статуса'
						arrow
					>
						<IconButton
							color='secondary'
							onClick={() => setOpen(true)}
						>
							<AppRegistrationIcon />
						</IconButton>
					</Tooltip>
					<CustomizedDialogs
						open={open}
						setOpen={setOpen}
					>
						<EditOrder
							order_id={id}
							setOpen={setOpen}
							status_id={order_status_id}
							user_id={user_id}
							address_id={address_id}
							order_date={order_date}
						/>
					</CustomizedDialogs>
					<Tooltip
						title='Удалить заказ'
						arrow
					>
						<IconButton
							color='primary'
							onClick={() =>
								handleDelOrder(user_id, id)
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
