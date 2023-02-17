import ProductItem from "../../components/Product";
import SliderItems from "../../components/Slider";
import { useGetProductsQuery } from "../../store/api/product";
import {useLocation} from "react-router-dom";

export function Home() {
    const location=useLocation()
    const { data } = useGetProductsQuery()

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