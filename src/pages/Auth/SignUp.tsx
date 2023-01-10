import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler,Controller,useFormState } from 'react-hook-form';
interface Inputs{
    login: string;
    password: string;
    confirmpassword: string;
    email: string;
}
type Props = {
    display: boolean,
    setDisplay :React.Dispatch<React.SetStateAction<boolean>>
}
export function SignUp({display,setDisplay}:Props) {
   
    const { handleSubmit, control, formState ,getValues} = useForm<Inputs>()
    const { errors } = formState
    const btnSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return(
        <div
            className={` py-2 ${display?'hidden':'flex'} flex-col justify-between items-center transition-all duration-200`}
        >
            <form
                onSubmit={handleSubmit(btnSubmit)}
                onChange={handleSubmit(btnSubmit)}
            >
                <Controller
                    control={control}
                    name="login"
                    rules={{
                        required: 'Обьязательное поля',
                        validate: (value: string) => {
                            if (value.length < 3) {
                                return 'Логин не может меньше 3-х симболов'
                            }
                            if (value.match(/[а-яА-я]/)) {
                                return 'Логин не может содержать русские буквы'
                            }
                            return true;
                        }
                    }}
                    render={({field:{onChange,value}}) => {
                                return <TextField
                            label="Username"
                            variant="outlined"
                            className="w-full"
                            type="text"
                            onChange={onChange}
                            value={value?value:''}
                            helperText={errors.login?.message}
                                />;
                    }}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={{
                        required:'Обьязательное поля'
                    }}
                    render={({ field: { onChange, value } }) => {
                        return <TextField
                                label="Password"
                                variant="outlined"
                                type="password"
                                sx={{ marginTop: 2, width: '100%' }}
                                onChange={onChange}
                                value={value?value:''}
                            />
                    }}/>
                <Controller
                    control={control}
                    name="confirmpassword"
                    rules={{
                        required:'Обьязательное поля'
                    }}
                    render={({ field:{onChange,value} }) => {
                        return <TextField
                                label="Confirm Password"
                                variant="outlined"
                                type="password"
                                        sx={{ marginTop: 2, width: '100%' }}
                                        onChange={onChange}
                                        value={value?value:''}
                            />
                    }} />
                 <Controller
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
                    }}/>
                <Button
                    variant="contained"
                    color="error"
                    sx={{ marginTop: 2, width: '100%' }}
                    type="submit"
                    // disabled={useFormState({control}).isValid}
                >Sign Up</Button>
            </form>
            <div>
                <span className="mr-2">{ display?'':'Уже есть аккаунт?'}</span>
                <button
                    onClick={()=>setDisplay(display=>!display)}
                    className="text-[#da002b]"
                >{display?'':'Войти' }</button>
                </div>
        </div>
    )
}