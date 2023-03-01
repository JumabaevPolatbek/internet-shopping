import { Outlet } from "react-router"
import HeaderTop from "../../components/HeaderTop"
import Navbar from "../../components/Navbar"
import {Footer} from "../../components/Footer";
import {useLocation} from "react-router-dom";
// import BreadCrumbs from "../../components/BreadCrumbs";


export function Layout() {
    const location=useLocation()
    return (
        <>
             <header className="flex flex-col">
                <HeaderTop/>
                <Navbar/>
                 {/*<BreadCrumbs/>*/}
            </header>
            <main>
                <Outlet/>
            </main>
            {
                location.pathname!=='/' ? '' : <Footer/>
            }

        </>
    )
}