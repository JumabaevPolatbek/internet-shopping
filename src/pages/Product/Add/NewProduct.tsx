import { useForm, SubmitHandler, Controller } from "react-hook-form"
import {  NewProduct, Product } from "../../../store/models/products"
import { Button, TextField } from "@mui/material"
import { useAddNewProductMutation, useGetSingleProductQuery } from "../../../store/api/product"
import CategorySelect from "../../../components/Category"
import Notification from "../../../components/Notification"
import React from "react"
import { useLocation, useParams } from "react-router-dom"
import { useAppSlector } from "../../../utils/hook"

export function NewAddProduct() {
    const [addProduct, result] = useAddNewProductMutation()
    // const getIdProduct=useAppSlector(state=>state.editProduct)
    const location = useLocation()
    const {id} = useParams()
    const {data}=useGetSingleProductQuery(id)
    const initialState: Product = {
        name: '',
        price: 0,
        description: '',
        id: 0,
        quantity: 0,
        discount: 0,
        images: [{
            image_path: '',
            product_id: 0,
            product_variants_id: 0,
            id:0
        }],
        category: {
            name: '',
            id: 0,
            parent_category: null,
            children_category:[]
        }
    }
    const { register, handleSubmit, control, setValue, reset } = useForm<NewProduct>({
        // defaultValues: 
    })
    const formSubmit: SubmitHandler<NewProduct> = (data) => addProduct(data)
    const [open,setOpen]=React.useState(false)
    const handleOpen=()=>{
        setOpen(open=>!open)
        // result.isSuccess && reset()
    }
    return(
        <>
        <div className="w-full h-[500px] flex justify-center items-center">
            <form
                onSubmit={handleSubmit(formSubmit)}
                className='h-full flex flex-col items-center justify-between py-2'
            >
                <TextField
                    {...register('product.name')}
                    label="Названия устройства"
                    type="text"
                    required
                />
                <TextField
                    {...register('product.description')}
                    label="Описание"
                    type="text"
                    required
                />
                <TextField
                    {...register('product.price')}
                    label="Цена"
                    type="number"
                    required
                />
                <TextField
                    {...register('product.quantity')}
                    label="Количество"
                    type="number"
                    required
                />
                <TextField
                    {...register('product.discount')}
                    label="Дисконт"
                    type="number"
                    required
                />
                <Controller
                    {...register('product.category_id')}
                    control={control}
                    render={() => {
                        return <CategorySelect setValue={setValue} ref={register('product.category_id').ref}/>
                    }}
                />
                <TextField
                    {...register('product_images.0.image_path')}
                    label="Ссылька на фото"
                    type="text"
                    required
                />
                <Button 
                onClick={handleOpen}
                variant="contained" 
                color="success" 
                type="submit" >
                    Добавить
                </Button>
            </form>
        </div>
        {result.isSuccess && <Notification value="Продукт успешьно добавлень" open={open} setOpen={setOpen}/>}
        {result.isError && <Notification value="Ошибка" open={open} setOpen={setOpen}/>}
        </>
    )
}