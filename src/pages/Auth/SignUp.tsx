import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm, SubmitHandler,Controller } from 'react-hook-form';
import { NewUserRoot } from "../../store/models/userModels";

type Props = {
    display: boolean,
    setDisplay :React.Dispatch<React.SetStateAction<boolean>>
}
export function SignUp({display,setDisplay}:Props) {
    const confirmPass = React.useRef({})
    const { handleSubmit, control, formState,watch ,register} = useForm<Partial<NewUserRoot>>()
    const { errors } = formState
    confirmPass.current=watch('user.password',"")
    const btnSubmit: SubmitHandler<Partial<NewUserRoot>> = (
		data
	) => console.log(data);




    return (
		<div
			className={` py-2 ${
				display ? 'hidden' : 'flex'
			} flex-col justify-between items-center transition-all duration-200`}
		>
			<form
				onSubmit={handleSubmit(btnSubmit)}
				onChange={handleSubmit(btnSubmit)}
			>
				<Controller
					control={control}
					name='user.username'
					rules={{
						required: 'Обьязательное поля',
						validate: (value: string) => {
							if (value.length < 3) {
								return 'Логин не может меньше 3-х симболов';
							}
							if (value.match(/[а-яА-я]/)) {
								return 'Логин не может содержать русские буквы';
							}
							return true;
						},
					}}
					render={({
						field: { onChange, value },
					}) => {
						return (
							<TextField
								label='Username'
								variant='outlined'
								className='w-full'
								type='text'
								onChange={onChange}
								value={value ? value : ''}
								helperText={
									errors.user?.username
										?.message
								}
							/>
						);
					}}
				/>
				<Controller
					control={control}
					name='user.password'
					rules={{
						required: 'Обьязательное поля',
					}}
					render={({
						field: { onChange, value },
					}) => {
						return (
							<TextField
								label='Password'
								variant='outlined'
								type='password'
								sx={{
									marginTop: 2,
									width: '100%',
								}}
								onChange={onChange}
								value={value ? value : ''}
							/>
						);
					}}
				/>
				<Controller
                    control={control}
					{...register('user.confirmPass')}
					rules={{
						validate: (value) =>
							value === confirmPass.current ||
							'Пароли не совпадает!',
					}}
					render={() => (
						<TextField
							label='Confirm Password'
							type='password'
							variant='outlined'
							sx={{
								marginTop: 2,
								width: '100%',
							}}
                            helperText={errors.user?.confirmPass?.message}
						/>
					)}
				/>
				{/* <Controller
                    control={control}
                    name="email"
                    rules={{
                        required:'Обьязательное поля'
                    }}
                    render={({ field:{onChange,value} }) => {
                        return <TextField
                                label="Email"
                                variant="outlined"
                                type="email"
                                        sx={{ marginTop: 2, width: '100%' }}
                                        onChange={onChange}
                                        value={value?value:''}
                            />
                    }}/> */}
				<Button
					variant='contained'
					color='error'
					sx={{ marginTop: 2, width: '100%' }}
					type='submit'
					// disabled={useFormState({control}).isValid}
				>
					Sign Up
				</Button>
			</form>
			<div>
				<span className='mr-2'>
					{display ? '' : 'Уже есть аккаунт?'}
				</span>
				<button
					onClick={() =>
						setDisplay((display) => !display)
					}
					className='text-[#da002b]'
				>
					{display ? '' : 'Войти'}
				</button>
			</div>
		</div>
	);
}