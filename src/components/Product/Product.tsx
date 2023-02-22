import {Link, useNavigate} from "react-router-dom"
import Equalizer from "@mui/icons-material/Equalizer"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Product } from "../../store/models/products";
import {useDispatch} from "react-redux";
import {addProduct} from "../../store/reducer/cartProduct";
type Props = {
    product:Product
}
export function ProductItem({product}:Props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleNav=()=>navigate(`/${'product/'+product.name.replace(/[' ']/,'&')}`,{state:product})
    const handleAddCart=(cart:Product)=> dispatch(addProduct(cart))
    return (
        <div className="w-[250px] xl:w-[300px] cursor-pointer">
            <div

                  className="p-[8px] h-[372px] md:h-[444px] w-[100%] overflow-hidden flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div></div>
                    <div
                        onClick={handleNav}
                    >
                        <img
                            className="h-[100px] md:h-[200px]"
                            src={product.images[0].image_path}
                            alt={product.name} />
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
                    <div>{ product.name}</div>
                    <div className="line-through text-[16px]">3 399 000 сум</div>
                    <div className="text-[#da002b] text-[18px] font-bold">{product.price} сум</div>
                    <div className="rounded-md bg-[#ffd740] text-[16px] px-3 py-1 font-semibold">{Math.floor(product.price/12)} сум x 12мес</div>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={()=>handleAddCart(product)}
                        className="border rounded p-2"
                    >
                        <ShoppingCartOutlinedIcon/>
                    </button>
                    <button className="border border-[#da002b] text-[#da002b] text-center py-2 px-3 rounded-md flex-1">
                        В рассрочку
                    </button>
                </div>
            </div>
        </div>
    )
}