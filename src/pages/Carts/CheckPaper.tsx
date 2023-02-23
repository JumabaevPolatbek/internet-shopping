import {StateProdcut} from "../../store/reducer/cartProduct";
import {toast} from "react-toastify";
import {useAddOrderMutation} from "../../store/api/orders";
import {useGetAllUsersQuery} from "../../store/api/user";
import {useAppSlector} from "../../utils/hook";
import {Decode} from "../../store/models/jwtDecode";
import {CheckProductList} from "./CheckProductList";
import {CheckAddress} from "./CheckAddress";
import {useForm,SubmitHandler} from "react-hook-form";
import {Button} from "@mui/material";
import {Order, OrderDetail} from "../../store/models/orders";

type Props={
    decode:Decode
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
    cookie:string
}

export function CheckPaper({decode,setOpen,cookie}:Props){
    const {product}=useAppSlector(state=>state.cartProduct)

    const {data:users}=useGetAllUsersQuery()
    const [addOrder,result]=useAddOrderMutation()
    const {handleSubmit,register}=useForm<{order:Order,order_detail:OrderDetail[]}>()
    const btnSubmit:SubmitHandler<{order:Order,order_detail:OrderDetail[]}> = async (data) =>
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
            className="w-[500px] py-2 px-[15px] flex flex-col"
            onSubmit={handleSubmit(btnSubmit)}
        >
            {product.map(item=><CheckProductList
                key={item.product_id}
                {...item}
            />)}
            {users?.find(user=>user.username===decode.sub)?.
            addresses.map(address=>
                <CheckAddress
                    address={address}
                    key={address.id}
                    ref={register('order.address_id').ref}
                />)}
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