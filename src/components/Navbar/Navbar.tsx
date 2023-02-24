import React from "react";
import { Link } from "react-router-dom";
import MenuCategory from "../Menu";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { SearchProduct } from "../Search";
import MenuActions from "../MenuActions";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


export function Navbar() {
    const [displayMenu, setDisplayMenu] = React.useState(false)
    const openMenu = () => {
        setDisplayMenu(displayMenu=>!displayMenu)
    }
    const displayTime=setTimeout(()=>setDisplayMenu(false),2000)
    const clearDisplay=()=>{
        clearTimeout(displayTime)
    }
    return (
        <div className="container mx-auto px-[5px] md:px-[15px] flex items-center justify-between mt-3">
            <div className="flex items-center flex-col xl:flex-row w-full">
                <div className="flex justify-between w-full xl:w-[fit-content]">
                    <div className="block xl:hidden">
                    <LocalPhoneIcon />
                    </div>
                    <Link to={'/'} className="text-[#da002b] text-[24px] font-bold ">Logo</Link>
                </div>
                <div className="flex justify-between w-full items-center ">
                    <div
                        className="relative flex flex-col w-[360px]"
                        onMouseLeave={()=>displayMenu}
                        onMouseEnter={clearDisplay}
                    >
                    <button
                        onClick={openMenu}
                        className={`   text-[18px]  border w-[fit-content] ${!displayMenu ? 'border-[#da002b] text-[#da002b]' : 'text-[#333] border-[#333]'} rounded-md px-[15px] py-[2px] ml-0 xl:ml-4`}>
                            {!displayMenu?<MenuIcon className="mr-2 duration-300"/>:<CloseIcon className="mr-2 duration-300"/>}
                            Каталог
                        </button>
                        <div className="absolute top-[100%] left-0 right-0 pl-[15px] z-[999]">
                            <MenuCategory display={ displayMenu} />
                        </div>
                    </div>
                    {/*<SearchProduct/>*/}
                    <MenuActions />
                </div>
            </div>
        </div>
    )
}