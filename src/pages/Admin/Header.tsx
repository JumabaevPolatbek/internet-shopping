import React from "react";
import { Outlet } from "react-router-dom";
import {ButtonPerson} from "../../components/ButtonPerson";



export function Header(){


    return (
        <div className="flex flex-col w-full">
            <div className="border-b w-full">
                <div className="container mx-auto  py-2 md:py-3 flex justify-end items-center">
                    {/*<ButtonPerson/>*/}
                </div>
            </div>
                <Outlet/>
        </div>
    )
}