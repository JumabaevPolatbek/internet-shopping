import React from "react";
import {useGetSingleProductQuery} from "../../store/api/product";
import {useDispatch} from "react-redux";
import {decrementQty, delProduct, addProduct} from "../../store/reducer/cartProduct";
import {Button, Typography} from "@mui/material";
import {useAppSlector} from "../../utils/hook";
import {Product} from "../../store/models/products";

type Props={
    id:number
    quantity:number
}

export function CartProduct({id,quantity}:Props){
    const {product}=useAppSlector(state=>state.cartProduct)
    const {data:dataProduct}=useGetSingleProductQuery(id)
    const dispatch=useDispatch()
    const handleDel=(product_id:number)=> dispatch(delProduct(product_id))
    const handleIncrement= (data:Product) =>  dispatch(addProduct(data))
    const handleDecrement = (product_id:number)=>dispatch(decrementQty(product_id))
    const index = product.findIndex(item=>item.product_id===id)
    console.log(index)

    return(
        <div
            className="flex justify-between items-center px-[15px]"
        >
             <div
                className="w-[100px] h-[100px]"
             >
                <img
                    className="w-full h-auto"
                    src={dataProduct?.images[0].image_path}
                />
             </div>
            <div
                className="flex flex-col justify-between items-center"
            >
                <Typography
                    variant="h5"
                >
                    {dataProduct?.name}
                </Typography>
                <Typography>
                    ELDE
                </Typography>
                <div
                    className="flex justify-between"
                >
                    <Button
                        variant="text"
                    >
                        В избранное
                    </Button>
                    <Button
                        onClick={()=> dataProduct && handleDel(dataProduct.id)}
                        variant="text"
                    >
                        Удалить
                    </Button>
                </div>
            </div>
            <div
                className="flex justify-between items-center"
            >
                <div
                    className="flex items-center border border-black rounded-md"
                >
                    <Button
                        onClick={()=>handleDecrement(id)}
                    >
                        -
                    </Button>
                    <Typography>
                        {quantity}
                    </Typography>
                    <Button
                        onClick={()=> dataProduct && handleIncrement(dataProduct)}
                    >
                        +
                    </Button>
                </div>
                <Typography
                    variant="h5"
                    className="px-3"
                >
                    {
                        product[index].quantity * product[index].price
                    }
                </Typography>
            </div>
        </div>
    )
}