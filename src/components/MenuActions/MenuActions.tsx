import EqualizerIcon from '@mui/icons-material/Equalizer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Link } from 'react-router-dom';
const mediumWidth = ' md:pt-0 md:bg-[inherit] md:static md:w-inherit md:justify-start md:w-[fit-content] md:pr-0 md:pl-0 md:pt-0'
const mobileWidth= 'fixed  z-[1001] bg-[#ccc]  w-full  left-0 bottom-0 pr-[50px] pl-[30px] pt-[5px]  flex items-center justify-between'
export function MenuActions() {
    return (
        <div className={mobileWidth + mediumWidth}>
            <Link
                to={'/rating'}
                className="flex flex-col items-center"
            >
                <EqualizerIcon />
                Сравнение
            </Link>
            <Link
                to={'/favorites'}
                className="flex flex-col items-center ml-6"
            >
                <FavoriteBorderIcon />
                Избранные
            </Link>
            <Link
                to={'/cart'}
                className="flex flex-col items-center ml-6"
            >
                <ShoppingCartOutlinedIcon />
                Корзина
            </Link>
            <Link
                to={'/login'}
                className="flex flex-col items-center ml-6"
            >
                <LoginOutlinedIcon />
                Кабинет
            </Link>
        </div>
    )
}