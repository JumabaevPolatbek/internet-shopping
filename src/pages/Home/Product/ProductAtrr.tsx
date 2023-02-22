import React from 'react'
import {useLocation} from "react-router-dom";
import Paper from "@mui/material/Paper";
import {Divider, Typography} from "@mui/material";


export function ProductAtrr(){
    const {state}=useLocation()
    return(
        <div className="w-[50%] min-h-[300px]">
            <Paper
                elevation={3}
                className="py-2 px-3"
            >
                <div className="flex justify-between">
                    <Typography
                        variant="subtitle1"
                    >
                        Названия устройства
                    </Typography>
                    <Typography
                        variant="h6"
                    >
                        {state.name}
                    </Typography>
                </div>
                <Divider/>
                <div className="flex justify-between mt-2">
                    <Typography
                        variant="subtitle1"
                    >
                        Описание
                    </Typography>
                    <Typography
                        variant="h6"
                    >
                        {state.description}
                    </Typography>
                </div>
                <Divider/>
                <div className="flex justify-between mt-2">
                    <Typography
                        variant="subtitle1"
                    >
                        Цена
                    </Typography>
                    <Typography
                        variant="h6"
                    >
                        {state.price}
                    </Typography>
                </div>
                <Divider/>
                <div className="flex justify-between mt-2">
                    <Typography
                        variant="subtitle1"
                    >
                        Количество
                    </Typography>
                    <Typography
                        variant="h6"
                    >
                        {state.quantity}
                    </Typography>
                </div>
                <Divider/>
            </Paper>
        </div>
    )
}