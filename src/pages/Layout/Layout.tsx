import { Outlet } from "react-router"
import HeaderTop from "../../components/HeaderTop"
import Navbar from "../../components/Navbar"
import {useLocation} from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";


export function Layout() {
    const location=useLocation()
    return (
        <>
             <header className="flex flex-col">
                <HeaderTop/>
                <Navbar/>
                 <div className="container mx-auto px-[15px]">
                     {
                         location.pathname !== '/' ? <BreadCrumbs/>:''
                     }
                 </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}