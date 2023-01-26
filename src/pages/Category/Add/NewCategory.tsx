import React from 'react'
import { useForm,SubmitHandler, Controller } from "react-hook-form"
import { Navigate ,useNavigate} from 'react-router-dom'
import { TextField,Button } from "@mui/material"
import { NewCategories } from "../../../store/models/categories"
import { useAddNewCategoryMutation } from "../../../store/api/category"
import  SelectCategory  from "../../../components/SelectCategory"
import Notification from "../../../components/Notification"

export function NewCategory() {
    const [addCategory,result]=useAddNewCategoryMutation()
    const initValue:NewCategories={
        name:'',
        parent_category_id:null
    }
    const { handleSubmit, register,formState,control,setValue,reset } = useForm<NewCategories>({
        defaultValues: initValue
    })
    const [open,setOpen]=React.useState(false)
    const {isValid}=formState
    const formSubmit:SubmitHandler<NewCategories>=(data)=>addCategory(data)
    const handleOpenAlert=()=>{
        setOpen(open=>!open)
    }
    // const nav= useNavigate()
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
                <Controller
                    {...register('parent_category_id')}
                    control={control}
                    render={()=>{
                        return <SelectCategory
                            setName={setValue}
                            ref={register('parent_category_id').ref}
                        />
                    }}
                />
                <Button 
                variant="contained" 
                color="success" 
                disabled={!isValid} 
                onClick={handleOpenAlert}
                type="submit">Добавить</Button>
            </form>
            {result.isSuccess && <Notification value={'Category has been added'} open={open} setOpen={setOpen}/>}
            {/* {result.isSuccess && <Navigate to={'/admin/category'} replace={true}/>} */}
            {result.isError && <Notification value='Ошибка' open={open} setOpen={setOpen}/>}
         </div>
    )
}