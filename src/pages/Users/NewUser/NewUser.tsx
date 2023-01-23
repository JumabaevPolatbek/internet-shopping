import React from "react";
import { useAddNewUserMutation, useGetAllUsersQuery } from "../../../store/api/user";
import { FormControlLabel, FormGroup, Switch, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { useForm,SubmitHandler, Controller } from "react-hook-form"
import { NewUserRoot } from "../../../store/models/userModels"
import { NewUserSelect } from "./NewUserSelect";
import { NewUserTypePhone } from "./NewUserTypePhone";
import Notification from "../../../components/Notification"

export function NewUser() {
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
    const [open,setOpen]=React.useState(false)
    const {data}=useGetAllUsersQuery()
    const {register,handleSubmit,control,setValue,reset,formState}=useForm<NewUserRoot>({
        defaultValues: initValue,
        mode:'onChange'
    });

    // Добавление пользовтеля
    const formSubmit: SubmitHandler<NewUserRoot> = (data) => addUser(data)
    const handleOpenAlert = ()=>{
        setOpen(open=>!open)
        if(result.isSuccess){
            reset(initValue)
        }
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
                                        required: 'Поле обязательно для заполнения',
                                        minLength: {
                                            value: 3,
                                            message:'Имя должен содержать не менее 3 символов '
                                        },
                                        validate: (value:string) => {
                                            if (value.match(/[а-яА-я]/)) {
                                                return 'Имя не можеть содержать русский буквы'
                                            }
                                            if(data?.find(user=>user.username===value)){
                                                return 'Это имя пользователя уже занято'
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
                            control={<Switch inputRef={register('user.is_admin').ref}/>} 
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
                    <div className="flex-1 flex flex-col addresses justify-between h-full px-2">
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
                            {/* <select {...register('user_address.country_id')}>
                                {data?.map(country => {
                                    return <option key={country.country_name} value={country.id}>
                                        {country.country_name}
                                    </option>
                                })}
                            </select> */}
                            <Controller
                                name="user_address.country_id"
                                control={control}
                                render={() => {
                                    return <NewUserSelect setCountry={ setValue} ref={ register('user_address.country_id').ref} />
                                }}
                            />
                            
                            {/* Усы жерде телефон массив формада */}
                            <div className="flex">
                                <TextField
                                    {...register('user_phones.0.phone_number')}
                                    type="text"
                                    label="Телефон:"
                                />
                                {/* <select {...register('user_phones.0.type')}>
                                    {['mobile', 'work', 'home'].map((type,index) => {
                                        return <option key={type} value={type}>
                                                {type}
                                        </option>
                                    })}
                                </select> */}
                                <Controller
                                    {...register('user_phones.0.type')}
                                    control={control}
                                    render={() => {
                                        return <NewUserTypePhone
                                            setType={setValue}
                                            ref={register('user_phones.0.type').ref}
                                        />
                                    }}
                                />
                            </div>
                            
                    </div>
                </div>
                <Button 
                onClick={handleOpenAlert}
                variant="contained" 
                color="success" 
                type="submit"
                disabled={!formState.isValid}
                >Добавить</Button>
            </form>
        </div>
        {result.isSuccess && <Notification value="Пользовател добавлен" open={open} setOpen={setOpen}/>}
        {!result.isError && <Notification value="Ошибка" open={open} setOpen={setOpen}/>}
        </>
    )
}