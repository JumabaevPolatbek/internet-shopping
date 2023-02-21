import React from "react"
import {  useForm, SubmitHandler } from "react-hook-form"
import {Countrie, NewCountry} from "../../store/models/countries"
import TextField from "@mui/material/TextField"
import { useAddNewCountrieMutation,useGetAllCountriesQuery} from "../../store/api/country"
import { Button } from "@mui/material"
import {toast} from "react-toastify";

type Props={
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    country:Countrie
}


export function EditCountry({setOpen,country}:Props) {
    const {country_name}=country
    const [addCountry,result]=useAddNewCountrieMutation()
    const { handleSubmit, control, register, formState } = useForm<NewCountry>({
        mode:'onSubmit',
        defaultValues:{
            country_name,
        }
    })
    const formSubmit: SubmitHandler<NewCountry> = async (data) => await addCountry(data)
        .unwrap()
        .then(response=>{
            toast.success(`${country_name} успешьно изменен`,{
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

    return (
        <div className="w-[500px] h-[400px] flex justify-center items-center  border rounded self-center">
            <form
                onSubmit={handleSubmit(formSubmit)}
                className="flex flex-col items-center justify-between "
            >
                <TextField
                    {...register('country_name', {
                        required:'Объязательное поле',
                        minLength: {
                            value: 3,
                            message:'Минимум 3 симбола'
                        },
                    })}
                    type="text"
                    label="Страна"
                />
                <div className="py-3 text-center">
                    {formState.errors.country_name && <p>{ formState.errors.country_name.message}</p>}
                </div>
                <Button
                    variant="contained"
                    type="submit"
                    className="mt-3"
                    disabled={result.isLoading}
                >
                    Add
                </Button>
            </form>

        </div>
    )
}