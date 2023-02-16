import { Cookies } from "react-cookie";
import ProductItem from "../../components/Product";
import SliderItems from "../../components/Slider";
import { useGetProductsQuery } from "../../store/api/product";
import { useAppDispatch } from "../../utils/hook";
import { signIn } from "../../store/reducer/authSlice";
import jwtDecode from "jwt-decode";
import { Decode } from "../../store/models/jwtDecode";

export function Home() {
    const { data } = useGetProductsQuery()
    const cookie = new Cookies()
    const dispatch = useAppDispatch()
    if (cookie.get('token')) {
        const decode:Decode=jwtDecode(cookie.get('token'))
        dispatch(signIn({
            token: cookie.get('token'),
            username: decode.sub
        }))
    }
    return (
                <div className="container mx-auto mt-3">
                    <div className="banner h-[350px]">
                            <SliderItems data={data}/>
                    </div>
                    <div className=" flex flex-wrap justify-around">
                        {data?.map(product => {
                        return <ProductItem product={product} key={product.id}/>
                    })}
                    </div>
                </div>
    )
}