import React, {SetStateAction} from 'react'
import { useForm,SubmitHandler, Controller } from "react-hook-form"
import { Navigate ,useNavigate} from 'react-router-dom'
import { TextField,Button } from "@mui/material"
import { NewCategories } from "../../../store/models/categories"
import {actionsCategories, useAddNewCategoryMutation} from "../../../store/api/category"
import  SelectCategory  from "../../../components/SelectCategory"
import Notification from "../../../components/Notification"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {useSelector} from "react-redux";

type Props={
    open:boolean,
    setOpen:React.Dispatch<SetStateAction<boolean>>
}
type Eror={
    data:{
        detail:string
    },
    status:number
}

export function NewCategory({open,setOpen}:Props) {
    const [addCategory,result]=useAddNewCategoryMutation()
    const {isSuccess,isError,error}=result
    const [errorMsg,setErrorMsg]=React.useState('')
    // const {error}=useSelector(actionsCategories.endpoints.addNewCategory.select)
    const initValue:NewCategories={
        name:'',
        parent_category_id:null
    }
    const { handleSubmit, register,formState,control,setValue,reset } = useForm<NewCategories>({
        defaultValues: initValue
    })
    const msgErr=error as Eror
    const {isValid}=formState
    const formSubmit:SubmitHandler<NewCategories>=(data)=>addCategory(data)
    const handleOpenAlert=async ()=>{
        if(result.isSuccess){
            toast('Успешьно')
            setTimeout(()=>setOpen(open=>!open),3000)
        }
        if(error){
            console.log('OK')
           setTimeout(()=>setErrorMsg(msgErr.data.detail),2000)
        }
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
                onClick={handleOpenAlert}
                type="submit">Добавить</Button>
            </form>

            {/*{result.isSuccess && <Notification value={'Category has been added'} open={open} setOpen={setOpen}/>}*/}
            {/* {result.isSuccess && <Navigate to={'/admin/category'} replace={true}/>} */}
            {/*{result.isError && <Notification value='Ошибка' open={open} setOpen={setOpen}/>}*/}
         </div>
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}