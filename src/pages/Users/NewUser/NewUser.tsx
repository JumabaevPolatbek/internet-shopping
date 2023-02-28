import React from "react";
import { useAddNewUserMutation } from "../../../store/api/user";
import { FormControlLabel, FormGroup, Switch, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { useForm,SubmitHandler, Controller } from "react-hook-form"
import { NewUserRoot } from "../../../store/models/userModels"
import { NewUserSelect } from "./NewUserSelect";
import { NewUserTypePhone } from "./NewUserTypePhone";
import {toast} from "react-toastify";

type Props={
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export function NewUser({setOpen}:Props) {
    const [addUser,result] = useAddNewUserMutation()
    const initValue:NewUserRoot = {
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
        user_phones:[{
            phone_number:'+998',
            type:'mobile'
        }],
        user_address:{
            street_address:'',
            postal_code:'',
            city: '',
            country_id:1
        }
    }
    const {register,handleSubmit,control,setValue,reset,formState}=useForm<NewUserRoot>({
        defaultValues: initValue,
        mode:'onChange'
    });

    // Добавление пользовтеля
    const formSubmit: SubmitHandler<NewUserRoot> = async (data) => await addUser(data)
        .unwrap()
        .then(response => {
            toast.success(`${response.user.username} успешьно добавлен!`,{
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
        .catch(error=>toast.error(`${error.data.detail}`,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        }))

    return(
        <>
        <div className="w-full h-[400px] flex justify-center items-center">
            <form
                onSubmit={handleSubmit(formSubmit)}
                className="flex flex-col justify-between h-full w-[845px]"
            >
                <div className="flex justify-between flex-1 py-2">
                    <div className="flex flex-col justify-between h-full pr-5">
                        <div className="flex items-center ">
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
                                color:`${initValue.user.is_admin?'#333':'#ccc'}`
                            }}
                            control={<Switch />} 
                            label="Администратор" />
                        </FormGroup>
                        </div>
                        <TextField
                                {...register('user.password', {
                                    required: 'Объязательное поле!',
                                    minLength: {
                                        value: 8,
                                        message:'пароль должен содержать не менее 8 символов '
                                    },
                                    validate: (value) => {
                                        if (value.match(/[а-яА-я]/)) {
                                            return 'Пароль не можеть содержать русский буквы'
                                        }
                                        return true
                                    }
                            })}
                            type="password"
                                label="Пароль"
                                helperText={formState.errors.user?.password && formState.errors.user?.password.message}
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
                    <div className="flex-1 flex flex-col addresses justify-between h-full pl-5">
                        <TextField
                            {...register('user_address.street_address')}
                            type="text"
                            label="Адресс"
                        />
                        <TextField
                            {...register('user_address.postal_code')}
                            type="text"
                            label="Почтовый индекс"
                        />
                        <TextField
                            {...register('user_address.city')}
                            type="text"
                            label="Город"
                        />

                            <Controller
                                name="user_address.country_id"
                                control={control}
                                render={() => {
                                    return <NewUserSelect setCountry={ setValue} ref={register('user_address.country_id').ref}/>
                                }}
                            />
                            
                            {/* Усы жерде телефон массив формада */}
                            <div className="flex">
                                <TextField
                                    {...register('user_phones.0.phone_number')}
                                    type="text"
                                    label="Телефон:"
                                />

                                <Controller
                                    name={register('user_phones.0.type').name}
                                    control={control}
                                    render={() => {
                                        return <NewUserTypePhone setType={setValue} ref={register('user_phones.0.type').ref}/>
                                    }}
                                />
                            </div>
                            
                    </div>
                </div>
                <Button 
                variant="contained"
                color="success" 
                type="submit"
                disabled={result.isLoading}
                >Добавить</Button>
            </form>
        </div>

        </>
    )
}