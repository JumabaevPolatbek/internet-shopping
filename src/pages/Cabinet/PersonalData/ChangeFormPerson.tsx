import React from "react";
import { useGetSingleUserQuery, useUpdateUserMutation } from "../../../store/api/user";
import { FormControlLabel, FormGroup, LinearProgress, Switch, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { useForm,SubmitHandler } from "react-hook-form"
import { UpdateUserRoot } from "../../../store/models/userModels";

import Notification from "../../../components/Notification";

type Props = {
    id?: number,
    open: boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export function ChangeFormPerson({id,open,setOpen}:Props) {
    const [update,result] = useUpdateUserMutation()
    const {data,isLoading,isSuccess}=useGetSingleUserQuery(id)
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
    
    const btnSubmit = () => {
        setOpen(open=>!open)
    }
    // Изменение пользовтеля
    const formSubmit: SubmitHandler<UpdateUserRoot> = (data) => update({
        dataUser: data,
        idUser:id
    })
    return(
        <>
            
            <div className="w-full h-[400px] flex flex-col items-center">
                {isLoading && <LinearProgress />}
                {isSuccess && <form
                onSubmit={handleSubmit(formSubmit)}
                className="flex flex-col justify-between h-full w-[400px] mx-auto"
            >
                <div className="flex justify-between flex-1 py-2">
                    <div className="flex flex-col justify-evenly h-full w-full">
                        <TextField
                                name={register('user_detail.first_name').name}
                                onChange={register('user_detail.first_name').onChange}
                                inputRef={register('user_detail.first_name').ref}
                            type="text"
                            label="Имя"
                        />
                        <TextField
                                name={register('user_detail.last_name').name}
                                onChange={register('user_detail.last_name').onChange}
                                inputRef={register('user_detail.last_name').ref}
                            type="text"
                                label="Фамилия"
                        />
                        <TextField
                                name={register('user_detail.user_image').name}
                                onChange={register('user_detail.user_image').onChange}
                                inputRef={register('user_detail.user_image').ref}
                            type="text"
                                label="Ссылька на фото"
                        />
                    </div>
                </div>
                    <Button
                        // onClick={btnSubmit}
                        variant="contained"
                        color="success"
                        disabled={!formState.isValid}
                        type="submit">Изменит</Button>
                </form>}
            
                {result.isSuccess && <Notification value="Пользователь успешно изменен" open={ open} setOpen={setOpen} />}
        </div>
        </>
    )
}