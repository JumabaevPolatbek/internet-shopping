import React from "react";
import {Link} from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Badge} from "@mui/material";
import {useAppSlector} from "../../utils/hook";


export function Cart(){
    const {product,count}=useAppSlector(state=>state.cartProduct)
    console.log(product)
    return(
        <Link
            to={'/carts'}
            className="flex flex-col items-center ml-6"
        >
            <Badge
                color="error"
                badgeContent={count}
            >
                <ShoppingCartOutlinedIcon />
            </Badge>
            Корзина
        </Link>
    )
}