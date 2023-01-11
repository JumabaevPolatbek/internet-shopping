import HeaderTop from "../../components/HeaderTop";
import Navbar from "../../components/Navbar";
import ProductItem from "../../components/Product";
import SliderItems from "../../components/Slider";
import { useGetProductsQuery } from "../../store/api/product";

export function Home() {
    const {data}=useGetProductsQuery()
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