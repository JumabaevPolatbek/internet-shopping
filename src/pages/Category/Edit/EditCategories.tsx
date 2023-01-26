import React from "react"
import { useGetCategoryQuery, useUpdateCategoryMutation } from "../../../store/api/category"
import { useParams } from "react-router-dom"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { NewCategories } from "../../../store/models/categories"
import { Button, TextField } from "@mui/material"
import { SelectEditCategory } from "./SelectEditCategory"
import Notification from "../../../components/Notification"


export function EditCategory(){
    const [open,setOpen]=React.useState(false)
    const {id}=useParams()
    const {data}=useGetCategoryQuery(id)
    const [update,result]=useUpdateCategoryMutation()
    const initValue:NewCategories={
        name:data?.name || '',
        parent_category_id: null
    }
    const {handleSubmit,control,reset,setValue,register,formState}=useForm<NewCategories>({
        defaultValues:initValue,
        mode:'onChange'
    })
    const {errors}=formState
    const formSubmit: SubmitHandler<NewCategories> = data => update({
        idCategory: id,
        updateCategory: {
            name: data.name,
            parent_category_id:data.parent_category_id
        }
    })
    const handleOpen=()=>{
        setOpen(open=>!open)
    }
    return(
        <div className="flex flex-col justify-center items-center pt-[15px]">
            <form
                onSubmit={handleSubmit(formSubmit)}
                className="flex flex-col items-center"
            >
                    <TextField
                        {...register('name')}
                        type="text"
                        label={data?.name}
                />
                {errors && <p>{ errors.name?.message}</p>}
                    <Controller
                        name={register('name').name}
                        control={control}
                        render={()=>{
                            return (
                                <SelectEditCategory 
                            setValue={setValue} 
                            ref={register('parent_category_id').ref}
                            />)
                        }}
                    />
                    <Button 
                        type="submit"
                        variant="contained"
                        onClick={handleOpen}
                        disabled={!formState.isValid}
                        className="pt-[5px]"
                    >
                        Edit
                    </Button>
            </form>
            {result.isSuccess && <Notification value="Категория изменен" open={open} setOpen={setOpen}/>}
        </div>
    )
}