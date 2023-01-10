import { Link } from "react-router-dom"
import Equalizer from "@mui/icons-material/Equalizer"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Product } from "../../store/models";
type Props = {
    product:Product
}
export function ProductItem({product}:Props) {
    return (
        <div className="w-[250px] xl:w-[300px] ">
            <Link to={'/'} className="p-[8px] h-[372px] md:h-[444px] w-[100%] overflow-hidden flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div></div>
                    {/* <span>-14%</span> */}
                    <div>
                        <img
                            className="h-[100px] md:h-[200px]"
                            src={product.image}
                            alt={product.title} />
                    </div>
                    <div className="product-actions flex flex-col">
                        <button className="text-[#ccc] text-[18px]">
                            <Equalizer />
                        </button>
                        <button className="text-[#ccc] text-[18px]">
                            <FavoriteBorder/>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div>{ product.title}</div>
                    <div className="line-through text-[16px]">3 399 000 сум</div>
                    <div className="text-[#da002b] text-[18px] font-bold">{product.price} сум</div>
                    <div className="rounded-md bg-[#ffd740] text-[16px] px-3 py-1 font-semibold">{Math.floor(product.price/12)} сум x 12мес</div>
                </div>
                <div className="flex items-center">
                    <button className="border rounded p-2">
                        <ShoppingCartOutlinedIcon/>
                    </button>
                    <button className="border border-[#da002b] text-[#da002b] text-center py-2 px-3 rounded-md flex-1">
                        В рассрочку
                    </button>
                </div>
            </Link>
        </div>
    )
}