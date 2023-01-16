import { useForm,SubmitHandler } from "react-hook-form"
import { TextField,Button } from "@mui/material"
import { NewCategories } from "../../store/models/categories"
import { useAddNewCategoryMutation } from "../../store/api/category"

export function NewCategory() {
    const [addCategory,result]=useAddNewCategoryMutation()
    const { handleSubmit, register,formState } = useForm<NewCategories>({
        defaultValues: {
            name: '',
            parent_category_id:null
        }
    })
    const {errors,isValid}=formState
    const formSubmit:SubmitHandler<NewCategories>=(data)=>addCategory(data)
    return(
        <div className="w-full h-[400px] flex justify-center items-center">
            <form
                onSubmit={handleSubmit(formSubmit)}
                className="h-full flex flex-col items-center justify-evenly py-2"
            >
                <TextField
                    {...register('name')}
                    label="Название категории"
                />
                <Button variant="contained" color="success" disabled={!isValid}>Добавить</Button>
            </form>
         </div>
    )
}