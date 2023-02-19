import {Button, TextField} from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { User } from "../../store/models/authUser";
import {useSigInMutation} from '../../store/api/auth'
import {Navigate, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
type Props = {
    display: boolean,
    setDisplay :React.Dispatch<React.SetStateAction<boolean>>
}
export function SignIn({display,setDisplay}:Props) {
    const [login, result] = useSigInMutation()
    const navigate = useNavigate()
    const { handleSubmit,  formState, register ,getValues} = useForm<User>()
    
    const btnSubmit: SubmitHandler<User> = (data) => login(data)
    if(result.isSuccess){
        toast(`Welcome ${getValues('username')}`,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        navigate('/',{replace:true})
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