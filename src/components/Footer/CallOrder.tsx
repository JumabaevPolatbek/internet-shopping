import React from "react";
import {Button, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useForm,SubmitHandler} from "react-hook-form";
import {CallBack} from "../../store/models/callBack";
import {useSendCallMutation} from "../../store/api/call";
import {toast} from "react-toastify";


export const CallOrder:React.FC=()=>{
	const [sendContact,result]=useSendCallMutation()
	const {handleSubmit,register,reset}=useForm<CallBack>()
	const btnSubmit:SubmitHandler<CallBack>=async (data)=> await sendContact(data)
		.unwrap()
		.then(response=>{
			toast.success('Спасибо. Наши работники с вами свяжутся!!',{
				position: "top-right",
					autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			})
			reset()
		})
		.catch(error=>{
			toast.error('Что то пошло не так!!',{
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			})
		})
    return (
		<Paper elevation={1}>
			<form
				className='py-2 px-4 w-[50%] flex'
				onSubmit={handleSubmit(btnSubmit)}
			>
				<div
					className="flex flex-col"
				>

				<Typography
					variant="h5"
				>
					Еще есть вопросы? Оставте свои контакты и время, мы вам позвоним
				</Typography>
				<div className='flex items-center py-2 '>
					<TextField
						label='Имя Фамилия'
						type="text"
						{...register('full_name')}
						required={true}
					/>
					<TextField
						{...register('phone_number')}
						label='Телефон номер:'
						type='text'
						sx={{
							marginLeft:2
						}}
						required={true}
					/>
				</div>
				<div
                    className="flex items-center py-2"
                >
					<div
						className="flex items-center"
					>
						<Typography>От</Typography>
						<TextField
							{...register('start_time')}
							type='time'
							placeholder="Время"
							required={true}
						/>
					</div>
					<div
						className="flex items-center ml-2"
					>
						<Typography>До</Typography>
						<TextField
							{...register('end_time')}
							type='time'
							placeholder="Время"
							required={true}
						/>
					</div>

				</div>
                <TextareaAutosize
					{...register('comment')}
					minRows={5}
                    maxRows={20}
                    // maxLength={10}
					className="border rounded"
                />
				</div>
				<Button
					variant="contained"
					color="info"
					className="self-start"
					type="submit"
					disabled={result.isLoading}
				>
					Отправить
				</Button>
			</form>
		</Paper>
	);
}