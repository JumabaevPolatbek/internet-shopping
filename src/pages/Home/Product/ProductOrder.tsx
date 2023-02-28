import {Product} from "../../../store/models/products";
import {Button, Divider, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import {Cookies} from "react-cookie";


export function ProductOrder(props:Product){
    const cookie= new Cookies()
    const handleBuy=async ()=>{
        if(cookie.get('token')){

        }
    }
    const handleCart=()=>{

    }
    return(
        <Paper
            elevation={3}
            className="py-2 px-4"
        >
            <Typography
                variant="h5"
                className="py-2"
            >
                Цена {props.price}
            </Typography>
            <Divider/>
            <Typography
                variant="body2"
                className="mt-5 py-2"
            >
                Стандартная доставка
                Доставка от 4 часов до 4 рабочих дней исходя от адреса доставки
            </Typography>
            <Divider/>
            <div
                className="flex justify-between items-center py-3"
            >
                <Button
                    variant="contained"
                    color="success"
                >
                    Купить
                </Button>
                <Button
                    variant="contained"
                    color="info"
                >
                    Добавить в корзину
                </Button>
            </div>

        </Paper>
    )
}