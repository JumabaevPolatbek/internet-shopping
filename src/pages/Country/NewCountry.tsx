import React from "react"
import {  useForm, SubmitHandler } from "react-hook-form"
import { NewCountry } from "../../store/models/countries"
import TextField from "@mui/material/TextField"
import { useAddNewCountrieMutation, useGetSingleCountrieQuery, useUpdateCountrieMutation } from "../../store/api/country"
import { useLocation,useParams } from "react-router-dom"
import { Button } from "@mui/material"
import Notification from '../../components/Notification'

export function NewCountrie() {
    const location = useLocation()
    const {id}=useParams()
    const [addCountry, result] = useAddNewCountrieMutation()
    const [update, resultUpdate] = useUpdateCountrieMutation()
    const {data}=useGetSingleCountrieQuery(id)
    const { handleSubmit, register, formState } = useForm<NewCountry>({
        defaultValues: location.pathname.includes('admin/country/edit') ?
            data :
            {},
        mode:'onSubmit'
    })
    const [open, setOpen] = React.useState(false)
    const formSubmit: SubmitHandler<NewCountry> = (data) => {
        location.pathname.includes('admin/country/edit') ?
            update({
                idCountry: id,
                country:data
            }) :
            addCountry(data)
    }
    const handleOpen = () => {
        setOpen(open=>!open)
    }
    return (
        <div className="w-[500px] h-[400px] flex flex-col justify-center items-center  border rounded self-center">
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
                        value:'Uzbekistan'
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
                    // disabled={!formState.isValid}
                    onClick={handleOpen}
                >
                    {location.pathname.includes('admin/country/edit')?'Изменит':'Добавить'}
                </Button>
            </form>
            {result.isSuccess && <Notification value="Страна успешно добавлено" open={open} setOpen={setOpen} />}
            {resultUpdate.isSuccess && <Notification value="Страна успешно изменен" open={open} setOpen={setOpen} />}
            {result.isError && <Notification value="Ошибка" open={ open } setOpen={setOpen} />}
        </div>
    )
}