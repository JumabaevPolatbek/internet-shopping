import React from "react";
import { useUpdateUserMutation } from "../../../store/api/user";
import { FormControlLabel, FormGroup, Switch, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { useForm,SubmitHandler } from "react-hook-form"
import { UpdateUserRoot, User } from "../../../store/models/userModels";

import {toast} from "react-toastify";

type Props={
    user:User,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export function EditUser({user,setOpen}:Props) {
    const {is_admin,id}=user
    const [update,result]=useUpdateUserMutation()
    const {register,handleSubmit,formState}=useForm<UpdateUserRoot>({
        defaultValues:user,
        mode:'onChange'
    });

    // Изменение пользовтеля
    const formSubmit: SubmitHandler<UpdateUserRoot> = async (data) => await update({
        idUser: id,
        dataUser:data
    })
        .unwrap()
        .then(response=>{
            toast.success(`${response.username} успешно изменен`,{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            setTimeout(()=>setOpen(false),2000)
        })
        .catch(error=>toast.error(`${error.data.detail}`,{position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",}))
    return(
        <>
            
            <div className="w-full h-[400px] flex flex-col items-center">
                 <form
                onSubmit={handleSubmit(formSubmit)}
                className="flex flex-col justify-between h-full w-[845px] mx-auto"
            >
                <div className="flex justify-between flex-1 py-2">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex items-center">
                                <TextField
                                    {...register('user.username',{
                                        required: true,
                                        minLength: {
                                            value: 3,
                                            message:'Имя должен содержать не менее 3 символов '
                                        },
                                        validate: (value:string) => {
                                            if (value.match(/[а-яА-я]/)) {
                                                return 'Имя не можеть содержать русский буквы'
                                            }
                                            return true
                                        }
                                    }) }
                                    type="text"
                                    label="Login"
                                />
                        <FormGroup>
                            <FormControlLabel 
                            {...register('user.is_admin')}
                            sx={{
                                color:`${is_admin?'#333':'#ccc'}`
                            }}
                                        control={<Switch
                                            defaultChecked={is_admin||false}
                                        />} 
                            label="Администратор" />
                        </FormGroup>
                        </div>
                        <TextField
                            {...register('user_detail.first_name')}
                            type="text"
                                label="Имя"
                        />
                        <TextField
                            {...register('user_detail.last_name')}
                            type="text"
                                label="Фамилия"
                        />
                        <TextField
                            {...register('user_detail.user_image')}
                            type="text"
                                label="Ссылька на фото"
                        />
                    </div>
                </div>
                    <Button
                        variant="contained"
                        color="success"
                        disabled={result.isLoading}
                        type="submit">Изменит</Button>
                </form>
        </div>
        </>
    )
}