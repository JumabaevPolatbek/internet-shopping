import {Button, TextField, Typography} from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { User } from "../../store/models/authUser";
import {useSigInMutation} from '../../store/api/auth'
import { Cookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
type Props = {
    display: boolean,
    setDisplay :React.Dispatch<React.SetStateAction<boolean>>
}
export function SignIn({display,setDisplay}:Props) {
    const [login, result] = useSigInMutation()
    const cookie = new Cookies()



    const { handleSubmit,  formState: { errors }, register } = useForm<User>()
    
    const btnSubmit: SubmitHandler<User> = (data) => login(data)
    
    if (result.data?.access_token) {
        cookie.set('token', result.data?.access_token, { path: '/' })
        return <Navigate to='/' replace/>

    } else {
        toast("Логин или парол неверный",{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }


    return(
        <div
            className={` py-2 ${display?'flex':'hidden'} flex-col justify-between items-center duration-200`}
        >
            <form
                onSubmit={handleSubmit(btnSubmit)}
            >
                <TextField
                    {...register('username')}
                    type="text"
                    sx={{ marginTop: 2, width: '100%' }}
                    variant="outlined"
                    label="Username"
                />
                <TextField
                {...register('password')}
                                label="Password"
                                variant="outlined"
                                type="password"
                                sx={{ marginTop: 2, width: '100%' }}
                            />
                <Button
                    variant="contained"
                    color="error"
                    sx={{ marginTop: 2, width: '100%' }}
                    type="submit"
                    // disabled={useFormState({control}).isValid}
                >Sign In</Button>
                {result.isError && <ToastContainer/>}
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