import { useForm, SubmitHandler, Controller } from "react-hook-form"
import {  NewProduct, Product } from "../../../store/models/products"
import { Button, TextField } from "@mui/material"
import { useAddNewProductMutation } from "../../../store/api/product"
import CategorySelect from "../../../components/Category"
import React from "react"
import {toast} from "react-toastify";

type Props = {
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}


export function NewAddProduct({setOpen}:Props) {
    const [addProduct, result] = useAddNewProductMutation()
    const initialState: NewProduct = {
        product:{
            name:'',
            category_id:1,
            price:0,
            quantity:0,
            description:'',
            discount:0
        },
        product_images:[
            {
                image_path:''
            }
        ]
    }
    const { register, handleSubmit, control, setValue, reset } = useForm<NewProduct>({
        defaultValues:initialState
    })
    const formSubmit: SubmitHandler<NewProduct> = async (data) => await addProduct(data)
        .unwrap()
        .then((response)=>{
            toast.success('Product added',{
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
        .catch(error=>{
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
                variant="contained"
                color="success" 
                type="submit" >
                    Добавить
                </Button>
            </form>
        </div>

        </>
    )
}