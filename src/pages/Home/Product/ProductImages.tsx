import React from "react";
import {useLocation} from "react-router-dom";
import Slider from "react-slick";
import {AsNavForProduct} from "./AsNavForProduct";


export function ProductImages(){
    const [nav1,setNav1]=React.useState<Slider|null>(null)
    const [nav2,setNav2]=React.useState<Slider|null>(null)
    const location= useLocation()
    const {state}=location
    return (
        <div className="w-[50%] py-2 px-3">
            <Slider
                asNavFor={nav2||undefined}
                ref={(slider1)=>setNav1(slider1)}
            >
                {[1,2,3].map(item=>{
                    return (
                        <div
                            key={item}
                            className="cursor-pointer"
                        >
                            <img
                                src={state.images[0].image_path}
                                className="w-full h-auto"
                            />
                        </div>
                    )
                })}
            </Slider>
            <div className="h-[100px] asnav-for py-2 px-3">
               <AsNavForProduct nav1={nav1} setNav2={setNav2}/>
            </div>
        </div>
    )
}