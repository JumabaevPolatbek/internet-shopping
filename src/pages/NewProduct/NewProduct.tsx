import { useForm,SubmitHandler, Controller } from "react-hook-form"
import {  NewProduct } from "../../store/models/products"
import { Button, TextField } from "@mui/material"
import { useAddNewProductMutation } from "../../store/api/product"
import CategorySelect from "../../components/Category"

export function NewAddProduct() {
    const [addProduct,result]=useAddNewProductMutation()
    const { register, handleSubmit ,control,formState} = useForm<NewProduct>({
        defaultValues: {
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
                },
                {
                    image_path:''
                }
            ]
        }
    })
    const {errors,isValid}=formState
    const formSubmit: SubmitHandler<NewProduct> = (data) => addProduct(data)
    return(
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
                    render={()=>{
                        return <CategorySelect/>
                    }}
                />
                <Button variant="contained" color="success" disabled={!isValid}>
                    Добавить
                </Button>
            </form>
        </div>
    )
}