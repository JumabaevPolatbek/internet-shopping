import React from 'react'
import {useGetAllUsersQuery} from "../../store/api/user";
import {User} from "../../store/models/userModels";
import {CheckAddress} from "./CheckAddress";
import {Typography} from "@mui/material";
import {useAppSlector} from "../../utils/hook";
import {decodeJWT} from "../../utils/decodeJWT";


export function OrderAddress(){
    const {token}=useAppSlector(state=>state.token)
    const {data:users}=useGetAllUsersQuery()
    const userFind = users?.find(user=>user.username===decodeJWT(token).sub) || {} as User
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