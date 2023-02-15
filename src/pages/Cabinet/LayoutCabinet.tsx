import React from 'react'
import { Link, useLocation, Outlet } from "react-router-dom";

export const LayoutPerson:React.FC=()=> {
    // const location = useLocation();
    // console.log(location)
    return(
        <div className="container flex flex-col items-start mx-auto">
            <div>
                <Link className="text-red-600 text-[18px]" to={'/'}>Главная</Link>
                <span className="mx-4">/</span>
                <Link to={'/cabinet/personal'} className="text-[18px]">Кабинет</Link>
            </div>
            <div className="flex flex-col xl:flex-row w-full xl:justify-between">
                <div>List</div>
                <Outlet/>
            </div>
        </div>
    )
}