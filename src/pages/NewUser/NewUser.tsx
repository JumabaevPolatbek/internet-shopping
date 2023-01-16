import React from "react";
import { useAddNewUserMutation } from "../../store/api/user";
import { useGetAllCountriesQuery } from "../../store/api/countrie";
import { FormControlLabel, FormGroup, Switch, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { useForm,SubmitHandler, Controller } from "react-hook-form"
import { NewUserRoot } from "../../store/models/userModels"
import { NewUserSelect } from "./NewUserSelect";
import { NewUserTypePhone } from "./NewUserTypePhone";

export function NewUser() {

    const {data}=useGetAllCountriesQuery()
    const [addUser, result] = useAddNewUserMutation()
    
    const [admin,setAdmin]=React.useState(false)
    const handlerAdmin=()=>{
        setAdmin(admin=>!admin)
    }

    const {register,handleSubmit,control,formState,setValue}=useForm<NewUserRoot>({
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
        },
        mode:'onChange'
    });

    // Добавление пользовтеля
    const formSubmit: SubmitHandler<NewUserRoot> = (data) => addUser(data)
    
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
                                                return 'Пароль не можеть содержать русский буквы'
                                            }
                                            return true
                                        }
                                    }) }
                                    type="text"
                                    label="Имя пользователя" />
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
                                {...register('user.password', {
                                    required: true,
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
                    <div className="flex-1 flex flex-col addresses justify-between h-full">
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
                                    return <NewUserSelect setCountry={ setValue} />
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
                                        return <NewUserTypePhone setType={setValue}/>
                                    }}
                                />
                            </div>
                            
                    </div>
                </div>
                <Button variant="contained" color="success" type="submit">Добавить</Button>
            </form>
        </div>
        </>
    )
}