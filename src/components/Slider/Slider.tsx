import Slider from "react-slick"
import { Item } from "./Item"
import './slider.css'
import { Products } from "../../store/models"
type Props = {
    data:Products|undefined
}
export function SliderItems({ data }: Props) {
    const dataProduct=data?data:null
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed:2000
    }
    return (
        <Slider {...settings}>
            {dataProduct?.map(product => {
                if (product.rating.rate>4.5) {
                    return <Item image={product.image} title={product.title} key={product.id}/>
                }
            })}
        </Slider>
    )
}