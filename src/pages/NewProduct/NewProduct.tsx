import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { useGetCategoriesQuery } from "../../store/api/category"
import {  NewProduct } from "../../store/models/products"
import { Button, TextField } from "@mui/material"
import { useAddNewProductMutation } from "../../store/api/product"
// import CategorySelect from "../../components/Category"

export function NewAddProduct() {
    const {data}=useGetCategoriesQuery()
    const [addProduct,result]=useAddNewProductMutation()
    const { register, handleSubmit ,control,formState} = useForm<NewProduct>()
    const formSubmit: SubmitHandler<NewProduct> = (data) => console.log(data)
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
                    render={() => {
                        return (<select {...register('product.category_id')}>
                            {data?.map(category => {
                                return <option key={category.name} value={category.id}>
                                        {category.name}
                                    </option>
                                })}
                        </select>)
                    }}
                />
                <Button variant="contained" color="success" type="submit" >
                    Добавить
                </Button>
            </form>
        </div>
    )
}