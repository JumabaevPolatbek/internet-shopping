import React from "react";
import { Outlet } from "react-router-dom";
import {ButtonPerson} from "../../components/ButtonPerson";
import {getCookie} from '../../utils/getCookie'
import {Cookies} from 'react-cookie'


export function Header(){
    const cookie = new Cookies()
    return (
        <div className="flex flex-col w-full">
            <div className="border-b w-full">
                <div className="container mx-auto  py-2 md:py-3 flex justify-end items-center">
                    {getCookie(cookie) && <ButtonPerson/>}
                </div>
            </div>
                <Outlet/>
        </div>
    )
}