import React from "react";
import { useGetFilterProductQuery } from "../../store/api/search";
import { useAppSlector } from "../../utils/hook";
import { AdvancedBtnsPrice } from "./AdvancedBtnsPrice";
import { AsideBtnsCategory } from "./AsideBtnsCategory";
import { Button, Skeleton } from "@mui/material";
import ProductItem from "../../components/Product";

export function AdvancedSearch() {
  const [typeFilter, setTypeFilter] = React.useState<
    "category" | "price" | "attributes" | " "
  >(" ");
  const state = useAppSlector((state) => state.searchState);
  const { data, isLoading } = useGetFilterProductQuery({
    type: typeFilter,
    filters: state,
  });
  return (
    <div className="container mx-auto flex px-[15px] mt-[20px]">
      <div className="flex flex-col">
        <Button
          onClick={() => setTypeFilter(" ")}
          color="info"
          variant="contained"
        >
          Очистить
        </Button>
        <AsideBtnsCategory setTypeFilter={setTypeFilter} type={typeFilter} />
        <AdvancedBtnsPrice setTypeFilter={setTypeFilter} type={typeFilter} />
      </div>
      <div className="flex-1 flex justify-between items-center flex-wrap px-[10px] py-4">
        {isLoading &&
          [1, 2, 3, 4].map((item) => (
            <Skeleton
              variant="rectangular"
              width={210}
              height={118}
              key={item}
            />
          ))}
        {data?.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
