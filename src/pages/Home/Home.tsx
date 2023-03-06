import { Skeleton } from "@mui/material";
import ProductItem from "../../components/Product";
import SliderItems from "../../components/Slider";
import { useGetProductsQuery } from "../../store/api/product";

export function Home() {
  const { data,isLoading } = useGetProductsQuery();
  return (
    <div className="container mx-auto mt-3">
      <div className="banner h-[350px]">
        <SliderItems data={data} />
      </div>
      <div className=" flex flex-wrap justify-around">
        {isLoading && [1, 2, 3, 4, 5, 6].map((item) => (
          <Skeleton variant="rectangular" width={210} height={118} key={item} />
        ))}
        {data?.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
