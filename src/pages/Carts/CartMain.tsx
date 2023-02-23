import Paper from "@mui/material/Paper";
import {useAppSlector} from "../../utils/hook";
import {CartProduct} from "./CartProduct";
import {OrderAddress} from "./OrderAddress";
import {useDispatch} from "react-redux";

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
            <OrderAddress />

        </Paper>
    )
}