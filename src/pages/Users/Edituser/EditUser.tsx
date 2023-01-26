import React from "react";
import { useUpdateUserMutation, useGetSingleUserQuery } from "../../../store/api/user";
import { FormControlLabel, FormGroup, Switch, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { useForm,SubmitHandler, Controller } from "react-hook-form"
import { UpdateUserRoot, User } from "../../../store/models/userModels";
import { useParams } from "react-router-dom";
import Notification from "../../../components/Notification";


export function EditUser() {
    const {id}=useParams()
    const { data } = useGetSingleUserQuery(id)
    const [update,result]=useUpdateUserMutation()
    const {register,handleSubmit,formState}=useForm<UpdateUserRoot>({
        defaultValues: {
            user: {
                username: data?.username,
                is_admin:data?.is_admin
            },
            user_detail: {
                first_name: data?.user_detail.first_name,
                last_name: data?.user_detail.last_name,
                user_image:data?.user_detail.user_image
            }
        },
        mode:'onChange'
    });
    const [open, setOpen] = React.useState(false);
    const btnSubmit = () => {
        setOpen(open=>!open)
    }
    // Изменение пользовтеля
    const formSubmit: SubmitHandler<UpdateUserRoot> = (data) => update({
        idUser: id,
        dataUser:data
    })
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
                                    label="Login" />
                        <FormGroup>
                            <FormControlLabel 
                            {...register('user.is_admin')}
                            sx={{
                                color:`${data?.is_admin?'#333':'#ccc'}`
                            }}
                                        control={<Switch
                                            defaultChecked={data?.is_admin||false}
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
                        onClick={btnSubmit}
                        variant="contained"
                        color="success"
                        disabled={!formState.isValid}
                        type="submit">Изменит</Button>
                </form>
                {result.isSuccess && <Notification value="Пользователь успешно изменен" open={ open} setOpen={setOpen} />}
        </div>
        </>
    )
}