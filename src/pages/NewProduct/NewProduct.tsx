import { useForm,SubmitHandler } from "react-hook-form"
import {  NewProduct } from "../../store/models/products"
import { TextField } from "@mui/material"
import { useAddNewProductMutation } from "../../store/api/product"

export function NewAddProduct() {
    const [addProduct,result]=useAddNewProductMutation()
    const { register, handleSubmit } = useForm<NewProduct>({
        defaultValues: {
            product: {
                name: 'Redmi K10',
                price: 3000,
                description: 'Xiaomi Redmi K10 8Gb/128Gb',
                quantity: 2,
                discount: 0,
                category_id:1
            },
            product_images: [
                {
                    image_path:'https://www.ixbt.com/img/n1/news/2021/9/3/image%20(1)_large.png'
                },
                {
                    image_path:'https://www.ixbt.com/img/n1/news/2021/9/3/image%20(1)_large.png'
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
            />
            <button>
                Add
            </button>
        </form>
    )
}