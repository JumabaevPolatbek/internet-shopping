import {Button, IconButton, Typography} from "@mui/material";
import {FavoriteBorder} from "@mui/icons-material";
import {OrderDetail} from "../../store/models/orders";
import {useGetSingleProductQuery} from "../../store/api/product";
import {useAppSlector} from "../../utils/hook";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {BtnActionsCart} from "../Carts/BtnActionsCart";
import {addProduct} from "../../store/reducer/cartProduct";
import {decrease} from "../../store/reducer/likesCount";


export function FavoriteProduct(props:OrderDetail){
    const {product_id}=props
    const {data}=useGetSingleProductQuery(product_id)
    const {products}=useAppSlector(state=>state.likesCount)
    const {product:cartProducts}=useAppSlector(state=>state.cartProduct)
    const dispatch=useDispatch()
    const findProductLike=products.find(product=>product.product_id===product_id)
    const handleClickLike=()=>{
        findProductLike && dispatch(decrease(product_id))
    }
    return(
        <div
            className="flex justify-between px-5 py-4"
        >
            <div>
                <div>
                    <IconButton
                        color="error"
                        onClick={handleClickLike}
                    >
                        {
                            findProductLike ? <FavoriteIcon/>: <FavoriteBorder/>
                        }

                    </IconButton>
                </div>
                <div
                    className="w-[250px] h-[150px] flex justify-center items-center"
                >
                    <img
                        src={data?.images[0].image_path}
                        className="w-auto h-full"
                    />
                </div>
        </div>

            <div
                className="flex flex-col justify-between items-center"
            >
                <Typography
                    variant="h4"
                >
                    {data?.name}
                </Typography>
                <Typography
                    variant="h6"
                >
                   Цена: {data?.price} сум
                </Typography>
                <Typography
                    variant="body1"
                >
                    {data?.description}
                </Typography>
                <div
                    className="flex items-center justify-around w-full"
                >
                    <Link
                        to={`/product/${data?.name.replace(/[' ']/g,'&').toLocaleLowerCase() || '/'}`}
                        state={data}
                    >
                        <Button
                            variant="contained"
                        >
                            Перейти
                        </Button>
                    </Link>
                    <div
                        className="w-[200px] h-[54px] py-2"
                    >
                        {
                            cartProducts.find(cart=>cart.product_id===product_id)===undefined ?
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={()=>data && dispatch(addProduct(data))}
                                >
                                    В корзину
                                </Button> :
                                <BtnActionsCart product_id={product_id} quantity={cartProducts.find(cart=>cart.product_id===product_id)?.quantity}/>
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}