import HeaderTop from "../../components/HeaderTop";
import Navbar from "../../components/Navbar";
import ProductItem from "../../components/Product";
import SliderItems from "../../components/Slider";
import { useGetProductNameQuery } from "../../store/slice/apiSlice";

export function Home() {
    const {data}=useGetProductNameQuery('products')
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