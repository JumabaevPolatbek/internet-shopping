import React from 'react'
import {Cookies} from "react-cookie";
import {useGetAllUsersQuery} from "../../store/api/user";
import jwtDecode from "jwt-decode";
import {Decode} from "../../store/models/jwtDecode";
import {User} from "../../store/models/userModels";
import {CheckAddress} from "./CheckAddress";
import {Typography} from "@mui/material";


export function OrderAddress(){
    const cookie = new Cookies()
    const decode:Decode = jwtDecode(cookie.get('token'))
    const {data:users}=useGetAllUsersQuery()
    const userFind = users?.find(user=>user.username===decode.sub) || {} as User
    return(
        <div
            className="flex flex-col px-2"
        >
            <Typography
                variant='h5'
                align='center'
            >
                Адресс доставки
            </Typography>
            {
                users && userFind.addresses.map(address=><CheckAddress address={address} key={address.id}/>)
            }
        </div>
    )
}