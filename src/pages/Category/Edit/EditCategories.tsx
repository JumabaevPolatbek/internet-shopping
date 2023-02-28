import React from "react"
import { useGetCategoryQuery, useUpdateCategoryMutation } from "../../../store/api/category"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { NewCategories } from "../../../store/models/categories"
import { Button, TextField } from "@mui/material"
import { SelectEditCategory } from "./SelectEditCategory"
import {toast} from "react-toastify";

type Props = {
    idCategory?:number
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export function EditCategory({idCategory,setOpen}:Props){
    const {data}=useGetCategoryQuery(idCategory)
    const [update,result]=useUpdateCategoryMutation()
    const initValue:NewCategories={
        name:data?.name || '',
        parent_category_id: null
    }
    const {handleSubmit,control,setValue,register,formState}=useForm<NewCategories>({
        defaultValues:initValue,
        mode:'onChange'
    })
    const {errors}=formState
    const formSubmit: SubmitHandler<NewCategories> = async (data) => await update({
        idCategory,
        updateCategory: {
            name: data.name,
            parent_category_id:data.parent_category_id
        }
    })
        .unwrap()
        .then((response)=>{
        toast.success(`${data.name} has changed`,{
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
            setTimeout(()=>setOpen(false),3000)
    })
        .catch((error)=>{
            toast.error(`${error.data.detail}`,{
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        })

    return(
        <div className="flex flex-col justify-center items-center pt-[15px]">
            <form
                onSubmit={handleSubmit(formSubmit)}
                className="flex flex-col items-center"
            >
                    <TextField
                        {...register('name')}
                        type="text"
                        label="Category"
                        defaultValue={data?.name}
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
                            id={data?.parent_category?.id}
                            />)
                        }}
                    />
                    <Button 
                        type="submit"
                        variant="contained"
                        disabled={!formState.isValid}
                        className="pt-[5px]"
                    >
                        Edit
                    </Button>
            </form>
        </div>
    )
}