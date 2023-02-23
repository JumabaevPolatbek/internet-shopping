import {StateProdcut} from "../../store/reducer/cartProduct";
import {toast} from "react-toastify";
import {useAddOrderMutation} from "../../store/api/orders";
import {useGetAllUsersQuery} from "../../store/api/user";
import {useAppSlector} from "../../utils/hook";
import {Decode} from "../../store/models/jwtDecode";
import {CheckProductList} from "./CheckProductList";
import {CheckAddress} from "./CheckAddress";
import {useForm,SubmitHandler} from "react-hook-form";
import {Button, Divider, Typography} from "@mui/material";
import {Order, OrderDetail, ServerResponseOrder} from "../../store/models/orders";
import React from "react";

type Props={
    decode:Decode
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
    cookie:string
}

export function CheckPaper({decode,setOpen,cookie}:Props){
    const {product,address}=useAppSlector(state=>state.cartProduct)

    const {data:users}=useGetAllUsersQuery()

    const [addOrder,result]=useAddOrderMutation()
    const {handleSubmit,setValue}=useForm<ServerResponseOrder>()
    const date = new Date()
    const getOrderDate=new Date(date.setHours(96))
    React.useEffect(()=>{
        setValue('order',{
            user_id:users?.find(user=>user.username===decode.sub)?.id || 1 ,
            order_date:`${getOrderDate.getFullYear()}-${getOrderDate.getMonth()<10?'0'+getOrderDate.getMonth():getOrderDate.getMonth()}-${getOrderDate.getDate()}`,
            address_id:address.id,
            order_status_id:1
        })
        setValue('order_details',product)
    },[users])
    const btnSubmit:SubmitHandler<ServerResponseOrder> = async (data) =>
        // await console.log(data)
        await addOrder(data)
            .unwrap()
            .then(response=> {
                toast.success(`Ваша заказ ${response.order_status.status}`, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                setOpen(false)
            })
        .catch(error=>toast.error(` ${error.data.detail}`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }))


    return(
        <form
            className="w-[500px] py-2 px-[15px] flex flex-col items-center"
            onSubmit={handleSubmit(btnSubmit)}
        >
            {product.map(item=><CheckProductList
                key={item.product_id}
                {...item}
            />)}
            <div
                className="py-2"
            >
                Адресс доставки: {address.country.country_name+', '
                    +address.city+', '
                    +address.street_address}
            </div>
            <Typography
                variant="h6"
                className="py-[10px]"

            >
                Итого: {product.reduce((prev,cur)=>prev+(cur.quantity*cur.price),0)} сум
            </Typography>
            <Button
                variant="contained"
                color="success"
                disabled={result.isLoading}
                type="submit"

            >
                Заказать
            </Button>
        </form>
    )
}