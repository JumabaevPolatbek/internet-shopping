import Slider from "react-slick";
import React from "react";
import {useLocation} from "react-router-dom";
import  './slider.css'
type Props={
    nav1:Slider|null,
    setNav2:React.Dispatch<React.SetStateAction<Slider|null>>
}
export function  AsNavForProduct({nav1,setNav2}:Props){
    const {state} = useLocation()
    return(
        <Slider
            asNavFor={nav1||undefined}
            ref={(slider2)=>setNav2(slider2)}
            className="h-full"
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
        >
            {[1,2,3].map(item=>{
                return (
                    <div
                        key={item}
                        className="py-2 px-3"
                    >

                        <div
                            className="h-full w-full"
                        >
                            <img
                                src={state.images[0].image_path}
                                className="w-auto h-full"
                            />
                        </div>
                    </div>
                )
            })}
        </Slider>
    )
}