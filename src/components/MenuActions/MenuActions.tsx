import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom';
import {useAppSlector} from "../../utils/hook";
import {ButtonPerson} from "../ButtonPerson";
import {Cookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {login} from "../../store/reducer/tokenSlice";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import {Cart} from './Cart'
import {Badge} from "@mui/material";
const mediumWidth = ' xl:pt-0 xl:bg-[inherit] xl:static xl:w-inherit xl:justify-start xl:w-[fit-content] xl:pr-0 xl:pl-0 xl:pt-0'
const mobileWidth = 'fixed  z-[1001] bg-[#ccc]  w-full  left-0 bottom-0 pr-[50px] pl-[30px] pt-[5px]  flex items-center justify-between'



export function MenuActions() {
    const {token} = useAppSlector(state=>state.token)
    const {count}=useAppSlector(state=>state.likesCount)
    const cookie  = new Cookies()
    const dispatch = useDispatch()
    const getCookie =  ()=>{
        if(cookie.get('token')){
            dispatch(login(cookie.get('token')))
        }
    }
    React.useEffect(()=>{
       getCookie()
    },[cookie.get('token')])
    return (
        <div className={mobileWidth + mediumWidth}>

            <NavLink
                to={'/favorites'}
                className={({isActive})=>`flex flex-col items-center ml-6 ${isActive?'text-[#da002b]':''}`}
            >
                <Badge
                    color="error"
                    badgeContent={count}
                >
                <FavoriteBorderIcon />
                </Badge>
                Избранные
            </NavLink>
            <Cart/>
            {!token && <NavLink
                to={'/login'}
                className={({isActive})=>`flex flex-col items-center ml-6 ${isActive?'text-[#da002b]':''}`}
            >
                <LoginOutlinedIcon />
                Кабинет
            </NavLink>}
            {token && <ButtonPerson />}


        </div>
    )
}