import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { User } from "../../../store/models/userModels";
import CustomizedDialogs from "../../../components/BootstrapDialog/CustomizedDialogs";
import React from "react";


export function PersonalDetail(props: Partial<User>) {
    const { username, user_detail, phone_numbers, addresses,id } = props
    const [open,setOpen]=React.useState(false)
    return (
        
            <div
                className="flex flex-col justify-between h-[400px] border rounded-md py-3 px-3 w-[470px] xl:w-[50%]"
            >
                <Typography sx={{fontSize:20}} gutterBottom variant="h5">
                        Персональные данные 
                </Typography>
            <Typography
                component="div"
                className="flex justify-between items-center"
            >
                <Typography>
                    Логин
                </Typography>
                <Typography>
                    {username}
                </Typography>
            </Typography>
            <Divider/>
            <Typography
                component="div"
                className="flex justify-between items-center"
            >
                <Typography>
                    Имя пользовтеля
                </Typography>
                <Typography>
                    {user_detail?.first_name + ' ' +user_detail?.last_name}
                </Typography>
            </Typography>
            <Divider/>
            <Typography
                component="div"
                className="flex justify-between items-center"
            >
                <Typography>
                    Адресс
                </Typography>
                <Typography>
                    {addresses?.map(item=> item.street_address + ','+item.city + ',' + item.country.country_name + ',' +item.postal_code)}
                </Typography>
            </Typography>
            <Divider/>
            <Typography
                component="div"
                className="flex justify-between items-center"
            >
                <Typography>
                    Телефон:
                </Typography>
                <Typography>
                    {phone_numbers?.map(phone=>phone.phone_number)}
                </Typography>
            </Typography>
            <Divider/>
            
                <Button
                    variant="contained"
                    color="error"
                className="mt-2 self-start"
                onClick={()=>setOpen(true)}
                >
                    Изменить
            </Button>
            <CustomizedDialogs
                open={open}
                setOpen={setOpen}
                username={username}
                id={id} />
            </div>
    )
}