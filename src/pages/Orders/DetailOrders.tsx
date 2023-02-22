import TableCell from "@mui/material/TableCell";
import { IconButton, Tooltip} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CustomizedDialogs from "../../components/BootstrapDialog/CustomizedDialogs";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import {ResponseOrders} from "../../store/models/orders";
import {useGetSingleUserQuery} from "../../store/api/user";
import {useGetSingleCountrieQuery} from "../../store/api/country";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import {OrderProducts} from "./OrderProducts";
import Collapse from "@mui/material/Collapse";
import {useDelOrderMutation} from "../../store/api/orders";
import {toast} from "react-toastify";
import {AddOrderStatus} from "./AddOrderStatus";

export function DetailOrders(props:ResponseOrders){
    const {order_status,order_details,order_date,address_id,user_id}=props
    const {data:user}=useGetSingleUserQuery(user_id)
    const {data:city}=useGetSingleCountrieQuery(address_id)
    const [open,setOpen]=React.useState(false)
    const [products,setProducts]=React.useState(false)
    const [delOrder,resultOrder]=useDelOrderMutation()
    const handleDelOrder = async (id_order:number,id_user:number)=> await delOrder({id_order,id_user})
        .unwrap()
        .then(response=>toast.success('Успешно удалень!',{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }))
        .catch(error=>toast.error(`${error.data.detail}`,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",}))
    return (
        <TableRow >

            <TableCell>{user ? user.username :''}</TableCell>
            <TableCell>
                <IconButton
                    onClick={()=>setProducts(products=>!products)}
                >
                { products ?
                    <KeyboardArrowUpOutlinedIcon/>
                    :<KeyboardArrowDownOutlinedIcon/>
                }
                </IconButton>
                <Collapse
                    in={products}
                    unmountOnExit
                >
                    {order_details?.map(product=><OrderProducts id={product.product_id} key={product.product_id}/>)}
                </Collapse>
            </TableCell>
            <TableCell>{city ? city.country_name : ''}</TableCell>
            <TableCell>{order_date}</TableCell>
            <TableCell>{order_status.status}</TableCell>
            <TableCell>
                <div className='flex items-center'>

                    <Tooltip title="Изменение статуса" arrow>
                        <IconButton
                            color='secondary'
                            onClick={()=>setOpen(true)}
                        >
                            <SettingsIcon/>
                        </IconButton>
                    </Tooltip>
                    <CustomizedDialogs open={open} setOpen={setOpen}>
                        <AddOrderStatus setOpen={setOpen} type='Change'/>
                    </CustomizedDialogs>
                    <Tooltip title="Delete Product" arrow>
                        <IconButton
                            color='primary'
                            onClick={()=>handleDelOrder(order_status.id,user_id)}
                        >
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
            </TableCell>
        </TableRow>
    )
}