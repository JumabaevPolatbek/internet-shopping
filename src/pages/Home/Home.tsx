import ProductItem from "../../components/Product";
import SliderItems from "../../components/Slider";
import { useGetProductsQuery } from "../../store/api/product";
import {useSelector} from "react-redux";

export function Home() {
    const { data } = useGetProductsQuery()
    const state = useSelector(state=>state)
    console.log(state)
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