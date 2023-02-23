import * as React from "react";
import {addProduct, decrementQty} from "../../store/reducer/cartProduct";
import {Button, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {Product} from "../../store/models/products";

type Props={
    product_id:number
    quantity:number
    dataProduct?:Product
}

export function BtnActionsCart({product_id,quantity,dataProduct}:Props){

    const dispatch = useDispatch()
    return(
        <div
            className="flex items-center border border-black rounded-md "
        >
            <Button
                onClick={()=>dispatch(decrementQty(product_id))}
            >
                -
            </Button>
            <Typography>
                {quantity}
            </Typography>
            <Button
                onClick={()=> dataProduct && dispatch(addProduct(dataProduct))}
            >
                +
            </Button>
        </div>
    )
}