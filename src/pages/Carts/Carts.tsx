import {CartMain} from "./CartMain";
import {Button} from "@mui/material";
import {useAppSlector} from "../../utils/hook";
import React from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {Cookies} from "react-cookie";
import CustomizedDialogs from "../../components/BootstrapDialog/CustomizedDialogs";
import {OrderCart} from "./OrderCart";


export function Carts(){
    const [open,setOpen]=React.useState(false)
    const navigate=useNavigate()
    const cookie = new Cookies()
    const handleOrder=()=>{
        if(cookie.get('token')){
            setOpen(true)

        }else {
            console.log('NO')
            navigate('/login')

        }
    }
    // React.useEffect(()=>{
    //
    // })

    return(
        <div
            className="container mx-auto px-[15px]"
        >
            <div
                className="flex justify-between items-start mt-[30px]"
            >
                <div className="flex flex-col justify-between w-[70%]">
                    <CartMain/>
                </div>
                <Button
                    onClick={handleOrder}
                >
                    Заказать
                </Button>
            </div>
            <CustomizedDialogs open={open} setOpen={setOpen}>
                <OrderCart/>
            </CustomizedDialogs>
        </div>
    )
}