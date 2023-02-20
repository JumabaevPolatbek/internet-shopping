import React, {SetStateAction} from 'react'
import { useForm,SubmitHandler, Controller } from "react-hook-form"
import { TextField,Button } from "@mui/material"
import { NewCategories } from "../../../store/models/categories"
import { useAddNewCategoryMutation} from "../../../store/api/category"
import  SelectCategory  from "../../../components/SelectCategory"
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

type Props={
    open:boolean,
    setOpen:React.Dispatch<SetStateAction<boolean>>
}


export function NewCategory({open,setOpen}:Props) {
    const [addCategory,result]=useAddNewCategoryMutation()
    const initValue:NewCategories={
        name:'',
        parent_category_id:null
    }
    const { handleSubmit, register,formState,control,setValue,reset } = useForm<NewCategories>({
        defaultValues: initValue
    })
    const formSubmit:SubmitHandler<NewCategories>= async (data)=>{
        await addCategory(data).unwrap().then(response=>{
            toast.success('Успешьно',{
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setTimeout(()=>setOpen(open=>!open),2000)
        }).catch(error=>{
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
    }



    return(
        <>
        <div className="w-[300px] h-[400px] flex justify-center items-center">
            <form
                onSubmit={handleSubmit(formSubmit)}
                className="h-full flex flex-col items-center justify-evenly py-2"
            >
                <TextField
                    {...register('name')}
                    label="Название категории"
                />
                <Controller
                    name={register('parent_category_id').name}
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
                disabled={result.isSuccess}
                type="submit">Добавить</Button>
            </form>

         </div>

        </>
    )
}