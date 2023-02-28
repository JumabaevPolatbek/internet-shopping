import React from "react";
import {useGetSingleProductQuery} from "../../store/api/product";
import {useDispatch} from "react-redux";
import {decrementQty, delProduct, addProduct} from "../../store/reducer/cartProduct";
import {Button, Divider, Typography} from "@mui/material";
import {useAppSlector} from "../../utils/hook";
import {Product} from "../../store/models/products";
import Paper from "@mui/material/Paper";
import {BtnActionsCart} from "./BtnActionsCart";

type Props={
    id:number
    quantity:number
}

export function CartProduct({id,quantity}:Props){
    const {product}=useAppSlector(state=>state.cartProduct)

    const {data:dataProduct}=useGetSingleProductQuery(id)

    const dispatch=useDispatch()

    const handleDel=(product_id:number)=> dispatch(delProduct(product_id))

    const index = product.findIndex(item=>item.product_id===id)


    return(
        <div className="py-2">
            <div
                className="flex justify-between items-center px-[15px] py-2"
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
                    <BtnActionsCart product_id={id} quantity={quantity} dataProduct={dataProduct}/>
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
        </div>
    )
}