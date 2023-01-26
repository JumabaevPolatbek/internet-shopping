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
        parent_category_id:data?.parent_category?.id || null
    }
    const {handleSubmit,control,reset,setValue,register,formState}=useForm<NewCategories>({
        defaultValues:initValue,
        mode:'onChange'
    })
    console.log(data)
    const {errors}=formState
    const formSubmit:SubmitHandler<NewCategories>=data=>update(data)
    const handleOpen=()=>{
        setOpen(open=>!open)
    }
    return(
        <div className="flex justify-center items-center pt-[15px]">
            <form
                onSubmit={handleSubmit(formSubmit)}

            >
                    <TextField
                        {...register('name')}
                        type="text"
                        label={data?.name}
                    />
                    <Controller
                        {...register('parent_category_id')}
                        control={control}
                        render={()=>{
                            return <SelectEditCategory 
                            setValue={setValue} 
                            ref={register('parent_category_id').ref}
                            value={data?.parent_category?.id}
                            />
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