import EqualizerIcon from '@mui/icons-material/Equalizer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Link } from 'react-router-dom';
const mediumWidth = ' xl:pt-0 xl:bg-[inherit] xl:static xl:w-inherit xl:justify-start xl:w-[fit-content] xl:pr-0 xl:pl-0 xl:pt-0'
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