import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Order } from '../../store/models/orders';
import { Button } from '@mui/material';
import { useGetOrderStatusQuery } from '../../store/api/orders';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {
	SelectChangeEvent,
} from '@mui/material/Select';
import { useUpdateOrderMutation } from '../../store/api/admin';

type Props = {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	order_id?: number | undefined;
	status_id: number;
};

export function EditOrder({
	setOpen,
	order_id,
	status_id,
}: Props) {
	const { data } = useGetOrderStatusQuery();
	const [updateOrder, resultUpdate] =
		useUpdateOrderMutation();
	const { handleSubmit, register } = useForm<Order>();
	const btnSumbitUpdate: SubmitHandler<Order> = async (
		order
	) => await console.log(order);
	// await updateOrder({ order_id, order })
	// 	.unwrap()
	// 	.then((response) => {
	// 		toast.success(
	// 			`${response.order_status.status} успешно изменен!`,
	// 			{
	// 				position: 'top-right',
	// 				autoClose: 3000,
	// 				hideProgressBar: false,
	// 				closeOnClick: true,
	// 				pauseOnHover: true,
	// 				draggable: true,
	// 				progress: undefined,
	// 				theme: 'light',
	// 			}
	// 		);
	// 		setTimeout(() => setOpen(false), 2000);
	// 	})
	// 	.catch((error) =>
	// 		toast.error(`${error.data.detail}`, {
	// 			position: 'top-right',
	// 			autoClose: 3000,
	// 			hideProgressBar: false,
	// 			closeOnClick: true,
	// 			pauseOnHover: true,
	// 			draggable: true,
	// 			progress: undefined,
	// 			theme: 'light',
	// 		})
	// 	);
	const [age, setAge] = React.useState(status_id);

	const handleChange = (event: SelectChangeEvent) => {
		setAge(+event.target.value);
        console.log(event.target.value)
	};
	return (
		<form
			onSubmit={handleSubmit(btnSumbitUpdate)}
			className='w-full h-[100px] flex flex-col items-center justify-between'
		>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>
						Статус заказа
					</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={`${age}`}
						label='Статус заказа'
						name={
							register('order_status_id').name
						}
						onChange={register('order_status_id').onChange}
						// name={register('status').name}
					>
						{data?.map((status) => (
							<MenuItem
								value={status.id}
								key={status.status}
							>
								{status.status}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
			<Button
				type='submit'
				variant='contained'
				color='success'
				disabled={resultUpdate.isLoading}
				className='mt-3'
			>
				Обновить
			</Button>
		</form>
	);
}
