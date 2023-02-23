import {CartMain} from "./CartMain";
import {Button} from "@mui/material";
import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Cookies} from "react-cookie";
import CustomizedDialogs from "../../components/BootstrapDialog/CustomizedDialogs";
import {CheckPaper} from "./CheckPaper";
import {useAddOrderMutation} from "../../store/api/orders";
import {useAppSlector} from "../../utils/hook";
import {StateProdcut} from "../../store/reducer/cartProduct";
import jwtDecode from "jwt-decode";
import {Decode} from "../../store/models/jwtDecode";
import {useGetAllUsersQuery} from "../../store/api/user";
import {toast} from "react-toastify";


export function Carts(){


    const [open,setOpen]=React.useState(false)
    const navigate=useNavigate()
    const cookie = new Cookies()
    const decode:Decode = jwtDecode(cookie.get('token'))


    const handleOrder=()=>{
        if(cookie.get('token')){
            setOpen(true)
        }else {
            navigate('/login')
        }
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
                <CheckPaper decode={decode} setOpen={setOpen} cookie={cookie.get('token')}/>
            </CustomizedDialogs>
        </div>
    )
}