import { useForm, SubmitHandler, Controller } from "react-hook-form"
import {Product, UpdateProduct} from "../../../store/models/products"
import { Box, Button, LinearProgress, TextField } from "@mui/material"
import {  useGetSingleProductQuery, useUpdateProductMutation } from "../../../store/api/product"
import Notification from "../../../components/Notification"
import React from "react"
import { useLocation, useParams } from "react-router-dom"
import { SelectUpdateProduct } from "./SelectUpdateProduct"
import {toast} from "react-toastify";
type Props={
    product:Product,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export function EditProduct({product,setOpen}:Props) {
    const {name,images,description,category,quantity,discount,price,id}=product
    const [update,result]=useUpdateProductMutation()
    const { register, handleSubmit, control, setValue, reset } = useForm<UpdateProduct>({
        defaultValues: {
            name: name,
            quantity: quantity,
            description: description,
            discount: discount,
            category_id: category.id,
            price: price
        }
    })
    const formSubmit: SubmitHandler<UpdateProduct> = async (data) => await update({
        idProduct: id,
        product:data
    }).unwrap()
        .then(response=>{
            toast.success(`${name} успешно изменен`,{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",})
            setTimeout(()=>setOpen(false),2000)
        })
        .catch(error=>toast.error(`${error.data.detail}`,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",}))

    return(
        <>
            <div className="w-full h-[500px]">
               <form
                onSubmit={handleSubmit(formSubmit)}
                className='h-full flex flex-col items-center justify-between py-2 mx-auto'
            >
                <TextField
                    {...register('name')}
                    label="Названия устройства"
                    type="text"
                    required
                />
                <TextField
                    {...register('description')}
                    label="Описание"
                    type="text"
                    required
                />
                <TextField
                    {...register('price')}
                    label="Цена"
                    type="number"
                    required
                />
                <TextField
                    {...register('quantity')}
                    label="Количество"
                    type="number"
                    required
                />
                <TextField
                    {...register('discount')}
                    label="Дисконт"
                    type="number"
                    required
                />
                <Controller
                    name={register('category_id').name}
                    control={control}
                    render={() => {
                        return <SelectUpdateProduct setValue={setValue} ref={register('category_id').ref}/>
                    }}
                />

                <Button 
                variant="contained"
                color="success"
                disabled={result.isLoading}
                type="submit" >
                    Добавить
                </Button>
            </form>
            
        </div>

        </>
    )
}