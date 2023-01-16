import React from "react";
import { FormControlLabel, FormGroup, Switch, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { useForm,SubmitHandler, Controller } from "react-hook-form"
import { NewUserRoot } from "../../store/models/userModels"

export function NewUser(){
    const [admin,setAdmin]=React.useState(false)
    const handlerAdmin=()=>{
        setAdmin(admin=>!admin)
    }
    const {register,handleSubmit,control,formState}=useForm<NewUserRoot>({
        defaultValues:{
            user:{
                username:'',
                is_admin:false,
                password:''
            },
            user_detail:{
                first_name:'',
                last_name:'',
                user_image:''
            },
            user_address:{
                street_address:'',
                postal_code:'',
                city:'',
                country_id:0
            },
            user_phones:[{
                phone_number:'+998',
                type:''
            }]
        }
    });
    const {errors,isValid}=formState
    const formSubmit:SubmitHandler<NewUserRoot>=(data)=>console.log(data)

    return(
        <>
        <div className="w-full h-[400px] flex justify-center items-center">
            <form
                onSubmit={handleSubmit(formSubmit)}
                className="flex flex-col justify-between"
            >
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className="flex items-center">
                        <TextField {...register('user.username')} type="text" label="Имя пользователя" />
                        <FormGroup>
                            <FormControlLabel 
                            sx={{
                                color:`${admin?'#333':'#ccc'}`
                            }}
                            control={<Switch defaultChecked={false} onClick={handlerAdmin}/>} 
                            label="Администратор" />
                        </FormGroup>
                        </div>
                        <TextField
                            {...register('user.password')}
                            type="password"
                            label="Пароль"
                        />
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
                    <div className="flex flex-col">
                        <TextField
                            {...register('user_address.street_address')}
                            type="text"
                            label="Адресс"
                        />
                        <TextField
                            {...register('user_address.postal_code')}
                            type="text"
                            label="Адресс"
                        />
                        <TextField
                            {...register('user_address.city')}
                            type="text"
                            label="Адресс"
                        />
                        <TextField
                            {...register('user_address.street_address')}
                            type="text"
                            label="Адресс"
                        />
                    </div>
                </div>
                <Button variant="contained" color="success" disabled={!isValid}>Добавить</Button>
            </form>
        </div>
        </>
    )
}