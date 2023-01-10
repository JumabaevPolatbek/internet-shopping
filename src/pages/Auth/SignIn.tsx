import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler,Controller,useFormState } from 'react-hook-form';
interface Inputs{
    login: string;
    password: string;
}
type Props = {
    display: boolean,
    setDisplay :React.Dispatch<React.SetStateAction<boolean>>
}
export function SignIn({display,setDisplay}:Props) {
   
    const { handleSubmit, control,formState:{errors} } = useForm<Inputs>()
    const btnSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return(
        <div
            className={` py-2 ${display?'flex':'hidden'} flex-col justify-between items-center duration-200`}
        >
            <form
                onSubmit={handleSubmit(btnSubmit)}
            >
                <Controller
                    control={control}
                    name="login"
                    rules={{
                        required:'Обьязательное поля'
                    }}
                    render={({field}) => {
                                return <TextField
                            label="Username"
                            variant="outlined"
                            className="w-full"
                            type="text"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            helperText={errors.login?.message}
                                />;
                    }}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field }) => {
                        return <TextField
                                label="Password"
                                variant="outlined"
                                type="password"
                                        sx={{ marginTop: 2, width: '100%' }}
                                        onChange={(e) => field.onChange(e)}
                                        value={field.value}
                            />
                    }}/>
                <Button
                    variant="contained"
                    color="error"
                    sx={{ marginTop: 2, width: '100%' }}
                    type="submit"
                    disabled={useFormState({control}).isValid}
                >Sign In</Button>
            </form>
            <div>
                <span className="mr-2">{ display?'Нет аккаунта?':''}</span>
                <button
                    onClick={()=>setDisplay(display=>!display)}
                    className="text-[#da002b]"
                >{display?'Зарегистрироваться':'' }</button>
                </div>
        </div>
    )
}