import {CartMain} from "./CartMain";
import {Button} from "@mui/material";
import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Cookies} from "react-cookie";
import CustomizedDialogs from "../../components/BootstrapDialog/CustomizedDialogs";
import {OrderCart} from "./OrderCart";
import {useAddOrderMutation} from "../../store/api/orders";
import {useAppSlector} from "../../utils/hook";
import {StateProdcut} from "../../store/reducer/cartProduct";
import jwtDecode from "jwt-decode";
import {Decode} from "../../store/models/jwtDecode";
import {useGetAllUsersQuery} from "../../store/api/user";
import {toast} from "react-toastify";


export function Carts(){
    const {product}=useAppSlector(state=>state.cartProduct)
    const {data:users}=useGetAllUsersQuery()
    // const {state}=useLocation()
    const [open,setOpen]=React.useState(false)
    const navigate=useNavigate()
    const cookie = new Cookies()
    const decode:Decode = jwtDecode(cookie.get('token'))
    const [addOrder,result]=useAddOrderMutation()
    console.log()
    const order = async (dataProduct:StateProdcut[]) => {
        return await addOrder({
           order:{
               user_id: users?.find(user=>user.username===decode.sub)?.id || 10,
               order_date: '2023-02-27',
               address_id: users?.find(user=>user.username===decode.sub)?.addresses[0].id || 8,
               order_status_id: 1
           },
            order_detail:product
        })
            .unwrap()
            .then(response=>toast.success(`Ваша заказ ${response.order_status.status}`,{
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }));
    }
    // console.log(state)
    const handleOrder=()=>{
        if(cookie.get('token')){
            // setOpen(true)
            return order(product)

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
            {/*<CustomizedDialogs open={open} setOpen={setOpen}>*/}
            {/*    <OrderCart/>*/}
            {/*</CustomizedDialogs>*/}
        </div>
    )
}