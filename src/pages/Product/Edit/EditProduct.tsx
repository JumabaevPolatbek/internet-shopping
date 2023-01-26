import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { UpdateProduct } from "../../../store/models/products"
import { Box, Button, LinearProgress, TextField } from "@mui/material"
import {  useGetSingleProductQuery, useUpdateProductMutation } from "../../../store/api/product"
import Notification from "../../../components/Notification"
import React from "react"
import { useLocation, useParams } from "react-router-dom"
import { SelectUpdateProduct } from "./SelectUpdateProduct"

export function EditProduct() {
    const location = useLocation()
    const {id} = useParams()
    const {data,isSuccess,isLoading}=useGetSingleProductQuery(id)
    const [update,result]=useUpdateProductMutation()
    const { register, handleSubmit, control, setValue, reset } = useForm<UpdateProduct>({
        defaultValues: {
            name: isSuccess ? data.name : '',
            quantity: isSuccess ? data.quantity : 0,
            description: isSuccess ? data.description : '',
            discount: isSuccess ? data.discount : 0,
            category_id: isSuccess ? data.category.id : 0,
            price: isSuccess ? data.price:0
        }
    })
    console.log(data)
    const formSubmit: SubmitHandler<UpdateProduct> = (data) => update({
        idProduct: id,
        product:data
    })
    const [open,setOpen]=React.useState(false)
    const handleOpen=()=>{
        setOpen(open=>!open)
        // result.isSuccess && reset()
    }
    return(
        <>
            <div className="w-full h-[500px]">
                {isLoading && <Box sx={{width:'100%'}}><LinearProgress/></Box>}
                {isSuccess && <form
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
                {/* <TextField
                    {...register('product_images.0.image_path')}
                    label="Ссылька на фото"
                    type="text"
                    required
                /> */}
                <Button 
                onClick={handleOpen}
                variant="contained" 
                color="success" 
                type="submit" >
                    Добавить
                </Button>
            </form>}
            
        </div>
        {result.isSuccess && <Notification value="Продукт успешьно изменен" open={open} setOpen={setOpen}/>}
        {result.isError && <Notification value="Ошибка" open={open} setOpen={setOpen}/>}
        </>
    )
}