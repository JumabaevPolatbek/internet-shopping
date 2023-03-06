import {useDispatch} from "react-redux";
import {addProduct} from "../../store/reducer/cartProduct";
import {Link} from "react-router-dom"
import { Product } from "../../store/models/products";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Button, IconButton} from "@mui/material";
import {useAppSlector} from "../../utils/hook";
import {BtnActionsCart} from "../../pages/Carts/BtnActionsCart";
import Paper from "@mui/material/Paper";
import React from "react";
import {decrease, increase} from "../../store/reducer/likesCount";
type Props = {
    product:Product
}
export function ProductItem({product}:Props) {
    const {product:stateProduct}=useAppSlector(state=>state.cartProduct)
    const {products}=useAppSlector(state=>state.likesCount)
    const dispatch = useDispatch()
    const handleAddCart=(cart:Product)=> dispatch(addProduct(cart))
    const [hover,setHover]=React.useState(false)
    const [like,setLike]=React.useState(false)
    const mouseLeave=()=>setHover(like)
    const handleLikes=()=>{
            if(products.find(item=>item.product_id===product.id)===undefined){
                setLike(true)
                dispatch(increase(product))
            }else{
                setLike(false)
                dispatch(decrease(product.id))
            }
    }

    return (
        <Paper
            elevation={2}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={mouseLeave}
            sx={{
                margin:'5px'
            }}
        >
        <div
            className="w-[250px] xl:w-[300px] cursor-pointer"
        >
            <div

                  className="p-[8px] h-[372px] md:h-[444px] w-[100%] overflow-hidden flex flex-col justify-between">
                <div
                    className="flex justify-between flex-1 pb-4"
                >
                    <Link
                        to={`product/${product.name.replace(/[' ']/g,'&')}`}
                        state={product}
                        className="flex flex-col justify-between items-center flex-1"
                    >
                        <div className="flex justify-between items-start">

                            <div
                            >
                                <img
                                    className="h-[100px] md:h-[200px]"
                                    src={product.images[0].image_path}
                                    alt={product.name} />
                            </div>
                        </div>
                        <div className="flex flex-col items-start self-start">
                            <div>{ product.name}</div>
                            <div className="line-through text-[16px]">3 399 000 сум</div>
                            <div className="text-[#da002b] text-[18px] font-bold">{product.price} сум</div>
                            <div className="rounded-md bg-[#ffd740] text-[16px] px-3 py-1 font-semibold">{Math.floor(product.price/12)} сум x 12мес</div>
                        </div>
                    </Link>
                    <div
                        className="relative"
                    >
                        <div
                            className={`absolute ${hover?'left-[-50px] opacity-100':'left-0 opacity-0'} transition-all`}
                        >
                            <IconButton
                                color="error"
                                onClick={handleLikes}
                            >
                                {like ? <FavoriteIcon/>: <FavoriteBorder/>}

                            </IconButton>
                        </div>
                    </div>
                </div>
                <div
                    className="py-2 h-[46px]"
                >
                    {stateProduct.find(item=>item.product_id===product.id)===undefined ?

                            <Button
                                onClick={()=>handleAddCart(product)}
                                variant="contained"
                                color="error"
                                sx={{width:'100%'}}
                            >
                                <ShoppingCartOutlinedIcon/>
                            </Button>
                        :
                        <BtnActionsCart product_id={product.id} quantity={stateProduct.find(item=>item.product_id===product.id)?.quantity} dataProduct={product}/>
                    }
                </div>
            </div>
        </div>
        </Paper>
    )
}