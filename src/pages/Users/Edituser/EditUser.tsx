import React from "react";
import { useAddNewUserMutation } from "../../../store/api/user";
import { FormControlLabel, FormGroup, Switch, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { useForm,SubmitHandler, Controller } from "react-hook-form"
import { UpdateUserRoot, User } from "../../../store/models/userModels";
import { useAppSlector } from "../../../utils/hook";


export function EditUser() {
    const useDetail=useAppSlector(state=>state.editUser);

    const {register,handleSubmit,control,setValue}=useForm<UpdateUserRoot>({
        defaultValues: useDetail,
        mode:'onChange'
    });

    // Изменение пользовтеля
    const formSubmit: SubmitHandler<UpdateUserRoot> = (data) => {
        // edit(data);
        // result.reset();
    }
    return(
        <>
        <div className="w-full h-[400px] flex justify-center items-center">
            <form
                onSubmit={handleSubmit(formSubmit)}
                className="flex flex-col justify-between h-full w-[845px]"
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
                                    label="Имя пользователя" />
                        <FormGroup>
                            <FormControlLabel 
                            {...register('user.is_admin')}
                            sx={{
                                color:`${useDetail.user.is_admin?'#333':'#ccc'}`
                            }}
                            control={<Switch defaultChecked />} 
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
                <Button variant="contained" color="success" type="submit">Изменит</Button>
            </form>
        </div>
        </>
    )
}