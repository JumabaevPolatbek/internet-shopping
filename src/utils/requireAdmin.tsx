import React from "react";
import jwtDecode from "jwt-decode";
import {Decode} from "../store/models/jwtDecode";
import {useAppSlector} from "./hook";
import {Navigate} from "react-router-dom";
import {Cookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {login} from "../store/reducer/tokenSlice";
type Props={
    children?:React.ReactNode
}


export const RequireAdmin:React.FC<Props>=({children})=> {
    const cookie = new Cookies()
    const decode: Decode =jwtDecode(cookie.get('token'))
    const dispatch = useDispatch()
    const {token} = useAppSlector(state=>state.token)
    React.useEffect(()=>{
        if(token===''){
            dispatch(login(cookie.get('token')))
        }
    },[])
    if(decode.is_admin!==1){
        return <Navigate to='/' replace={true}/>
    }
    return (
        <>
            {children}
        </>
    )
}