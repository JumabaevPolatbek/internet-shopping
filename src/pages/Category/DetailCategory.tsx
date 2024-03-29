import * as React from 'react';
import { useGetCategoriesQuery } from '../../store/api/category';
import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from '@mui/material';
import { useLocation } from 'react-router-dom';

import { SearchCategory } from '../../components/Search';
import { ItemCategory } from './ItemCategory';
import CustomizedDialogs from '../../components/BootstrapDialog/CustomizedDialogs';
import 'react-toastify/dist/ReactToastify.css';
import { NewCategory } from './Add/NewCategory';

export function DetailCategory() {
	const { data } = useGetCategoriesQuery();
	const location = useLocation();
	const [open, setOpen] = React.useState(false);
	const [page, setPage] = React.useState(0);

	const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
		<div className='flex flex-col items-center p-[15px]'>
			{location.pathname.includes(
				'admin/category'
			) && (
				<div className='flex w-full justify-between py-3'>
					<Button
						variant='contained'
						color='success'
						className='self-start'
						onClick={() => setOpen(true)}
					>
						Create Category
					</Button>
					<CustomizedDialogs
						open={open}
						setOpen={setOpen}
						username='category'
					>
						<NewCategory
							open={open}
							setOpen={setOpen}
						/>
					</CustomizedDialogs>
					<SearchCategory />
				</div>
			)}
			<Paper sx={{ width: '100%' }}>
				<TableContainer
					sx={{
						maxHeight: '600px',
						minHeight: '400px',
					}}
				>
					<Table
						stickyHeader
						aria-label='sticky table'
					>
						<TableHead>
							<TableRow>
								<TableCell></TableCell>
								<TableCell colSpan={1}>
									Name
								</TableCell>
								<TableCell colSpan={1}>
									Parent Category
								</TableCell>
								<TableCell>
									Actions
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data
								?.slice(
									page * rowsPerPage,
									page * rowsPerPage +
										rowsPerPage
								)
								.map((category) => {
									return (
										<ItemCategory
											key={
												category.id
											}
											{...category}
										/>
									);
								})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 20]}
					component='div'
					count={data?.length || 4}
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
