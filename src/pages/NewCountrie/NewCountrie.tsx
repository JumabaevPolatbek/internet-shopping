import { Controller,useForm,SubmitHandler } from "react-hook-form"
import { NewCountry } from "../../store/models/countries"
import TextField from "@mui/material/TextField"
import { useAddNewCountrieMutation,useGetAllCountriesQuery} from "../../store/api/countrie"

export function NewCountrie() {
    const [addCountry,result]=useAddNewCountrieMutation()
    const { handleSubmit, control,register } = useForm<NewCountry>()
    const formSubmit: SubmitHandler<NewCountry> = (data) => addCountry(data)
    console.log(result)
    const {data} = useGetAllCountriesQuery()
    console.log(data)
    return(
        <form
            onSubmit={handleSubmit(formSubmit)}
            className="flex"
        >
            {/* <Controller
                control={control}
                {...register('country_name')}
                render={() => {
                    return (
                        <TextField
                            name="country_name"
                            label="Name Country"
                            variant="outlined"
                        />
                    )
                }}
            /> */}
            <TextField
                {...register('country_name')}
                label="Name Country"
            />
            <button className="py-2 px-3 border rounded bg-red-600">
                    Add
            </button>
        </form>
    )
}