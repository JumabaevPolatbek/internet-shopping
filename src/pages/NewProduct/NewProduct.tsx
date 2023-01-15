import { useForm,SubmitHandler } from "react-hook-form"
import {  NewProduct,ProductFake } from "../../store/models/products"
import { TextField } from "@mui/material"
import { useAddNewProductMutation } from "../../store/api/product"

export function NewAddProduct() {
    const [addProduct,result]=useAddNewProductMutation()
    const { register, handleSubmit } = useForm<NewProduct>({
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
    const formSubmit: SubmitHandler<NewProduct> = (data) => addProduct(data)
    console.log(result)
    return(
        <form
            onSubmit={handleSubmit(formSubmit)}
        >
            <TextField
                {...register('product.name')}
                label="Name"
                type="text"
            />
            <TextField
                {...register('product.description')}
                label="Description"
                type="text"
            />
            <TextField
                {...register('product.price')}
                label="Price"
                type="number"
            />
            <TextField
                {...register('product.quantity')}
                label="Quantity"
                type="number"
            />
            <TextField
                {...register('product.discount')}
                label="Discount"
                type="number"
            />
            <button>
                Add
            </button>
        </form>
    )
}