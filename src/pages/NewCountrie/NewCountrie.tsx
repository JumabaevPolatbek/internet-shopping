import { Controller,useForm,SubmitHandler } from "react-hook-form"
import { NewCountry } from "../../store/models/countries"
import TextField from "@mui/material/TextField"
import { useAddNewCountrieMutation,useGetAllCountriesQuery} from "../../store/api/countrie"

export function NewCountrie() {
    const [addCountry,result]=useAddNewCountrieMutation()
    const { handleSubmit, control, register } = useForm<NewCountry>()
    console.log(useForm().formState.isValid)
    const formSubmit: SubmitHandler<NewCountry> = (data) => addCountry(data)
    return (
        <div className="w-[500px] h-[400px] flex justify-center items-center  border rounded self-center">
            <form
                onSubmit={handleSubmit(formSubmit)}
                className="flex flex-col items-center "
            >
                <Controller
                    control={control}
                    {...register('country_name')}
                    rules={{
                        required: true,
                        validate: (value: string) => {
                            if (value.length < 3) {
                                return 'Строка не может быть меньше 3-х символов'
                            }
                            if (value.match(/[а-яА-я]/)) {
                                return 'Сторака не можеть соддержат русские буквы!'
                            }
                            return true
                        }
                        }
                    }
                    render={() => {
                        return (
                            <TextField
                                required
                                name="country_name"
                                label="Name Country"
                                variant="outlined"
                            />
                        )
                    }}
                />
                <button
                    disabled={!useForm().formState.isValid}
                    className={`py-2 px-3 border rounded  bg-red-600`}>
                        Add
                </button>
                </form>
        </div>
    )
}