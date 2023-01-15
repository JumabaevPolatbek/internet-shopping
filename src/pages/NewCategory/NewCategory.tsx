import { useForm,SubmitHandler } from "react-hook-form"
import { TextField } from "@mui/material"
import { NewCategories } from "../../store/models/categories"
import { useAddNewCategoryMutation } from "../../store/api/category"

export function NewCategory() {
    const [addCategory,result]=useAddNewCategoryMutation()
    const { handleSubmit, register } = useForm<NewCategories>({
        defaultValues: {
            name: '',
            parent_category_id:null
        }
    })
    const formSubmit:SubmitHandler<NewCategories>=(data)=>addCategory(data)
    return(
        <form
            onSubmit={handleSubmit(formSubmit)}
        >
            <TextField
                {...register('name')}
                label="Category Name"
            />
            <TextField
                {...register('parent_category_id')}
                label="id"
                disabled
            />
            <button className="py-2 px-3 border rounded">
                Add
            </button>
        </form>
    )
}