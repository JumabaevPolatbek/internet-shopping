import {CartMain} from "./CartMain";
import {Button} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import {Cookies} from "react-cookie";
import CustomizedDialogs from "../../components/BootstrapDialog/CustomizedDialogs";
import {CheckPaper} from "./CheckPaper";
import {useAppSlector} from "../../utils/hook";
import jwtDecode from "jwt-decode";
import {Decode} from "../../store/models/jwtDecode";
import {NotCart} from "./NotCart";



export function Carts(){
    const {product}=useAppSlector(state=>state.cartProduct)
    const {token} = useAppSlector(state=>state.token)
    const [open,setOpen]=React.useState(false)
    const navigate=useNavigate()
    // const decode:Decode = jwtDecode(token)


    const handleOrder=()=>{
        if(token){
            setOpen(true)
        }else {
            navigate('/login')
        }
    }
    if(product.length===0){
        return <NotCart/>
    }
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
                <CheckPaper  setOpen={setOpen} />
            </CustomizedDialogs>
        </div>
    )
}