import React from 'react'
import {useForm,SubmitHandler} from "react-hook-form";
import {ResponseOrderStatus} from "../../store/models/orders";
import {Button, TextField} from "@mui/material";
import {
    useAddOrderStatusMutation,
    useUpdateOrderStatusMutation
} from "../../store/api/orders";
import {toast} from "react-toastify";

type Props={
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    type:string
    id?:number
    name?:string
}

export function AddOrderStatus({setOpen,type,id,name}:Props){
    const [addStatus,result]=useAddOrderStatusMutation()
    const [updateStatus,resultUpdate]=useUpdateOrderStatusMutation()
    const {handleSubmit,register}=useForm<Omit<ResponseOrderStatus,'id'>>({
        defaultValues:{
            status: name || ''
        }
    })
    const btnSubmitAdd:SubmitHandler<Omit<ResponseOrderStatus,'id'>> = async (data)=>
        await addStatus(data)
        .unwrap()
        .then(response=>{
            toast.success(`${response.status} успешно добавлен!`,{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setTimeout(()=>setOpen(false),2000)
        })
        .catch(error=>toast.error(`${error.data.detail}`,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }))
    const btnSumbitUpdate:SubmitHandler<Omit<ResponseOrderStatus,'id'>>  =async (data)=> await updateStatus({
        data,
        id
    })
        .unwrap()
        .then(response=>{
            toast.success(`${response.status} успешно изменен!`,{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setTimeout(()=>setOpen(false),2000)
        })
        .catch(error=>toast.error(`${error.data.detail}`,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }))
    return(
        <form
            onSubmit={type==='Add'?handleSubmit(btnSubmitAdd):handleSubmit(btnSumbitUpdate)}
            className="w-full h-[100px] flex flex-col items-center justify-between"
        >
            <TextField
                {...register('status')}
                label="Названия статуса"
            />
            <Button
                type="submit"
                variant="contained"
                color="success"
                disabled={result.isLoading || resultUpdate.isLoading}
                className="mt-3"
            >
                Создать
            </Button>
        </form>
    )
}