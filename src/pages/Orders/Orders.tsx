import * as React from 'react';
import {
	Button,
	IconButton,
	LinearProgress,
	Typography,
} from '@mui/material';
import CustomizedDialogs from '../../components/BootstrapDialog/CustomizedDialogs';
import { useLocation } from 'react-router-dom';
import { AddOrderStatus } from './AddOrderStatus';
import {
	useGetOrderStatusQuery,
	useGetOrdersUserQuery,
} from '../../store/api/orders';
import { useGetOrdersQuery } from '../../store/api/admin';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { DetailOrders } from './DetailOrders';
import { TableHeadOrders } from './TableHeadOrders';
import { ResponseOrders } from '../../store/models/orders';

const thArr = [
	'Имя пользователя',
	'Продукты',
	'Статус заказа',
	'Адресс доставки',
	'Срок доставки',
	'Действия',
];

export function Orders() {
	const { pathname } = useLocation();
	const { data: status, isLoading: statusFetching } =
		useGetOrderStatusQuery();
	const { data: orders, isLoading } = useGetOrdersQuery();
	let arrSort: ResponseOrders[] | undefined = orders;
	console.log('arr',arrSort);
	const [open, setOpen] = React.useState(false);

	const [page, setPage] = React.useState(0);

	const [rowsPerPage, setRowsPerPage] =
		React.useState(10);

	const handleChangePage = (
		event: unknown,
		newPage: number
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	return (
		<div className='px-3 py-3'>
			<div className='flex justify-between w-full'>
				{pathname.includes('admin/orders') && (
					<>
						<Button
							variant='contained'
							color='success'
							className='self-start'
							onClick={() => setOpen(true)}
						>
							Создание статус заказа
						</Button>
						<CustomizedDialogs
							open={open}
							setOpen={setOpen}
						>
							<AddOrderStatus
								setOpen={setOpen}
								type='Add'
							/>
						</CustomizedDialogs>
					</>
				)}
				<Typography
					className='flex justify-evenly items-center'
					component='div'
				>
					<Typography
						variant='body1'
						className='px-[15px]'
					>
						Статусы:
					</Typography>
					{statusFetching && <LinearProgress />}
					{status?.map((stats) => (
						<Typography
							key={stats.id}
							variant='h6'
							className='px-3'
						>
							{stats.status}
						</Typography>
					))}
				</Typography>
			</div>

			{isLoading && <LinearProgress />}
			<Paper
				sx={{ width: '100%', margin: '10px 0 0 0' }}
			>
				<TableContainer sx={{ maxHeight: 440 }}>
					<Table
						stickyHeader
						aria-label='sticky table'
					>
						<TableHead>
							<TableRow>
								{thArr.map(
									(column, index) => {
										return (
											<TableHeadOrders
												index={
													index
												}
												column={
													column
												}
												order={
													arrSort
												}
											/>
										);
									}
								)}
							</TableRow>
						</TableHead>
						<TableBody>
							{orders?.map((order) => (
								<DetailOrders
									key={order.id}
									{...order}
								/>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component='div'
					count={4}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={
						handleChangeRowsPerPage
					}
				/>
			</Paper>
		</div>
	);
}
