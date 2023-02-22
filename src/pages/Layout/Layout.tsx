import { Outlet } from "react-router"
import HeaderTop from "../../components/HeaderTop"
import Navbar from "../../components/Navbar"
import {BreadCrumbs} from "../../components/BreadCrumbs";


export function Layout() {
    return (
        <>
             <header className="flex flex-col">
                <HeaderTop/>
                <Navbar/>
                 <BreadCrumbs/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}