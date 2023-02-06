import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler,Controller,useFormState } from 'react-hook-form';
import { User } from "../../store/models/authUser";
import {useSigInMutation} from '../../store/api/auth'
type Props = {
    display: boolean,
    setDisplay :React.Dispatch<React.SetStateAction<boolean>>
}
export function SignIn({display,setDisplay}:Props) {
    const [login,result]=useSigInMutation()
    const { handleSubmit, control,formState:{errors},register } = useForm<User>()
    var arr:any=[]
    const btnSubmit: SubmitHandler<User> = (data) => {
        var user = encodeURIComponent('username')+
        '='+encodeURIComponent(data.username)+
        '&'+encodeURIComponent('password')+
        '='+encodeURIComponent(data.password)
        console.log(user)
        login(user)
    }
    console.log(result.data)
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