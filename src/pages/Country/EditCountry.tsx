import React from "react"
import { Controller, useForm, SubmitHandler } from "react-hook-form"
import { NewCountry } from "../../store/models/countries"
import TextField from "@mui/material/TextField"
import { useAddNewCountrieMutation,useGetAllCountriesQuery} from "../../store/api/country"
import { Button } from "@mui/material"
import Notification from '../../components/Notification'

export function EditCountry() {
    const [addCountry,result]=useAddNewCountrieMutation()
    const { handleSubmit, control, register, formState } = useForm<NewCountry>({
        mode:'onSubmit'
    })
    const [open, setOpen] = React.useState(false)
    const formSubmit: SubmitHandler<NewCountry> = (data) => addCountry(data)
    const handleOpen = () => {
        setOpen(open=>!open)
    }
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
                    Add
                </Button>
            </form>
            {result.isSuccess && <Notification value="Страна успешно добавлено" open={open} setOpen={setOpen} />}
            {result.isError && <Notification value="Ошибка" open={ open } setOpen={setOpen} />}
        </div>
    )
}