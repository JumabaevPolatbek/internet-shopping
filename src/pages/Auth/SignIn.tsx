import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { User } from "../../store/models/authUser";
import {useSigInMutation} from '../../store/api/auth'
import jwtDecode from "jwt-decode";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
type Props = {
    display: boolean,
    setDisplay :React.Dispatch<React.SetStateAction<boolean>>
}
export function SignIn({display,setDisplay}:Props) {
    const [login, result] = useSigInMutation()

    const [cookie, setCookie] = useCookies(['token'])

    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'

    const { handleSubmit, control, formState: { errors }, register } = useForm<User>()
    
    const btnSubmit: SubmitHandler<User> = (data) => login(data)
    
    if (result.data?.access_token) {
        console.log(jwtDecode(result.data?.access_token))
        setCookie('token', result.data?.access_token, { path: '/' })
        // navigate('/',{replace:true})
    }
    // console.log(Cookies())
    // console.log(get('token',{path:'/'}))
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