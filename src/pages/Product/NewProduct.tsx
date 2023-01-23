import React from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { useGetCategoriesQuery } from "../../store/api/category"
import {  NewProduct } from "../../store/models/products"
import { Button, LinearProgress, TextField, TextareaAutosize } from "@mui/material"
import { useAddNewProductMutation } from "../../store/api/product"
import CategorySelect from "../../components/Category"
import Notification from '../../components/Notification'

export function NewAddProduct() {
    const {data}=useGetCategoriesQuery()
    const [addProduct, result] = useAddNewProductMutation()
    const initValue: NewProduct = {
        product: {
            name: '',
            description: '',
            price: 0,
            quantity: 0,
            discount: 0,
            category_id:1
        },
        product_images: [
            {
                image_path:''
            }
        ]
    }
    const { register, handleSubmit, control, setValue,reset } = useForm<NewProduct>({
        defaultValues: initValue,
        mode:'all'
    })
    const formSubmit: SubmitHandler<NewProduct> = (data) => addProduct(data)
    const [open, setOpen] = React.useState(false)
    const navigate=useNavigate()
    const openAlert = () => {
        setOpen(open => !open)
        if (result.isError) {
            reset(initValue)
        }
    }
    return (
        <>
            <div className="container mx-auto">
            {result.isLoading && <LinearProgress />}
            <form
                onSubmit={handleSubmit(formSubmit)}
                className='flex flex-col items-center  w-full'
                >
                    <div className='flex justify-between w-full '>
                        <div className='flex flex-col items-start justify-between'>
                            <TextField
                                sx={{
                                marginTop:'10px'
                            }}
                                {...register('product.name')}
                                label="Названия устройства"
                                type="text"
                                required
                                disabled={result.isLoading}
                            />
                            <TextField
                            sx={{margin:'10px 0 0 0'}}
                        {...register('product_images.0.image_path')}
                        label="Ссылька на фото"
                        type="text"
                        required
                            className="w-full "
                            disabled={result.isLoading}
                            />
                            <Controller
                                {...register('product.category_id')}
                                control={control}
                                render={() => {
                                    return <CategorySelect setValue={setValue} ref={register('product.category_id').ref} result={ result.isLoading} />
                                }}
                            />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <TextField
                                sx={{
                                marginTop:'10px'
                            }}
                                {...register('product.price')}
                                label="Цена"
                                type="text"
                                required
                                    disabled={result.isLoading}
                            />
                            <TextField
                                {...register('product.quantity')}
                                label="Количество"
                                type="number"
                                required
                                    className="w-full  my-2"
                                    disabled={result.isLoading}
                            />
                            <TextField
                                {...register('product.discount')}
                                label="Дисконт"
                                type="number"
                                required
                                    className="w-full  py-2"
                                    disabled={result.isLoading}
                            />
                            
                        </div>
                        <TextareaAutosize
                            {...register('product.description')}
                            // maxRows={8}
                            style={{overflowY:'scroll',width:'60%',resize:'none',margin:'10px 0 0 0',height:'204px' }}
                            placeholder="Описание"
                            required
                                className="border rounded p-2"
                                disabled={result.isLoading}
                        />
                    </div>
                    
                    <Button
                        onClick={openAlert}
                        variant="contained"
                        color="success"
                        type="submit"
                        disabled={result.isLoading}
                        sx={{
                            marginTop: '10px',
                            alignSelf:'flex-start'
                            }}
                    >
                    Добавить
                </Button>
            </form>
            </div>
            {result.isSuccess && <Notification value='Продукт добавлен' open={open} setOpen={setOpen} />}
            {result.isError && <Notification value='Ошибка' open={open} setOpen={setOpen} />}
            
        </>
    )
}