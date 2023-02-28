import { Product } from "../../store/models/products"


type Props = {
    product:Product
}
export function Item({ product }: Props) {
    
    return (
        <div className="flex flex-col w-full h-[260px] items-center">
            <img
                className="h-[calc(100%-20px)] w-[250px] md:w-[auto]"
                src={product.images[0].image_path}
                alt={product.name} />
            <span
                className="text-[18px]"
            >{product.description}</span>
        </div>
    )
}