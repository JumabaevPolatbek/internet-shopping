import Paper from "@mui/material/Paper";
import {Button, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";


export function NotCart(){
    return(
        <div
            className="container mx-auto px-[15px] mt-[30px]"
        >
                <div
                    className="flex flex-col items-center"
                >
                <Typography
                    variant="h4"
                    align="center"
                >
                    У вас пока в корзине нет продукта!!
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                >
                    Вы можете добавить продукту нажав кнопку добавить!
                </Typography>

                    <NavLink to="/">
                        <Button
                            variant="contained"
                            color="error"
                        >
                        Добавить!
                        </Button>
                    </NavLink>
                </div>
        </div>
    )
}