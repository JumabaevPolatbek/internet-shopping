import {useAppSlector} from "../../utils/hook";
import Paper from "@mui/material/Paper";
import {NotProductFovorites} from "./NotProductFovorites";
import {FavoriteProduct} from "./FavoriteProduct";


export function Favorites(){
    const {products}=useAppSlector(state=>state.likesCount)
    return(
        <div
            className="container mx-auto px-[15px] mt-[20px]"
        >
            <Paper
                elevation={3}
            >
                {
                    products.length>0 ?
                        products.map(product=><FavoriteProduct {...product} key={product.product_id}/>)
                        :<NotProductFovorites/>
                }
            </Paper>
        </div>
    )
}