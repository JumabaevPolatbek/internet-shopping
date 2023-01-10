import { Outlet } from "react-router"
import useWidth from "../../utils"
import HeaderTop from "../../components/HeaderTop"
import Navbar from "../../components/Navbar"


export function Layout() {
    return (
        <>
             <header className="flex flex-col">
                <HeaderTop/>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}