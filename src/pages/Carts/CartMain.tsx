import Paper from "@mui/material/Paper";
import {useAppSlector} from "../../utils/hook";
import {CartProduct} from "./CartProduct";


export function CartMain(){
    const {product}=useAppSlector(state=>state.cartProduct)
    return(
        <Paper
            elevation={3}
        >
            {product.map((item)=><CartProduct
                quantity={item.quantity}
                id={item.product_id}
                key={item.product_id}/>)}
        </Paper>
    )
}