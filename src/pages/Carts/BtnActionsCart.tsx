import * as React from "react";
import {addProduct, decrementQty} from "../../store/reducer/cartProduct";
import {Button, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {Product} from "../../store/models/products";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
type Props={
    product_id:number
    quantity?:number
    dataProduct?:Product
}

export function BtnActionsCart({product_id,quantity,dataProduct}:Props){

    const dispatch = useDispatch()
    return(
        <div
            className="flex items-center justify-between border border-black rounded-md  "
        >
            <Button
                onClick={()=>dispatch(decrementQty(product_id))}
                color="error"
                variant="contained"
            >
                <RemoveIcon/>
            </Button>
            <Typography
                variant="h6"
                sx={{width:64}}
                align="center"
            >
                {quantity}
            </Typography>
            <Button
                onClick={()=> dataProduct && dispatch(addProduct(dataProduct))}
                color="success"
                variant="contained"
            >
                <AddIcon/>
            </Button>
        </div>
    )
}