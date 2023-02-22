import React from "react";
import {useGetSingleProductQuery} from "../../store/api/product";
import {useDispatch} from "react-redux";
import {decrementQty, delProduct, incrementQty} from "../../store/reducer/cartProduct";
import {Button, Typography} from "@mui/material";
import {useAppSlector} from "../../utils/hook";

type Props={
    id:number
    quantity:number
}

export function CartProduct({id,quantity}:Props){
    const {product}=useAppSlector(state=>state.cartProduct)
    const qty = id>0 && product.find(item=>item.product_id===id)
    const {data}=useGetSingleProductQuery(id,{skip:id>0?false:true})
    const dispatch=useDispatch()
    const handleDel=(product_id:number)=>dispatch(delProduct(product_id))
    const handleIncrement= (product_id:number) => dispatch(incrementQty(product_id))
    const handleDecrement = (product_id:number)=>dispatch(decrementQty(product_id))
    if(id===0){
        return null
    }

    return(
        <div
            className="flex justify-between items-center px-[15px]"
        >
             <div
                className="w-[100px] h-[100px]"
             >
                <img
                    className="w-full h-auto"
                    src={data?.images[0].image_path}
                />
             </div>
            <div
                className="flex flex-col justify-between items-center"
            >
                <Typography
                    variant="h5"
                >
                    {data?.name}
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
                        onClick={()=>handleDel(id)}
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
                        onClick={()=>handleIncrement(id)}
                    >
                        +
                    </Button>
                </div>
                <Typography
                    variant="h5"
                    className="px-3"
                >
                    {product.reduce((prev,cur)=>prev+(cur.quantity*cur.price),0)}
                </Typography>
            </div>
        </div>
    )
}