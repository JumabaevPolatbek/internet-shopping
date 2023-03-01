import React from 'react'
import {useLocation} from "react-router-dom";
import {Typography} from "@mui/material";
import {RatingProduct} from "./RatingProduct";
import {ProductImages} from "./ProductImages";
import {ProductAtrr} from "./ProductAtrr";
import {ProductOrder} from "./ProductOrder";
import BreadCrumbs from "../../../components/BreadCrumbs";

export function ProductInfo(){
    const location = useLocation()
    const {state}=location
    return (
        <div className="container mx-auto px-[15px] pt-[10px]">
            <div>

                <BreadCrumbs/>
            </div>
            <div className="flex flex-col">
                <Typography variant="h2" className="py-2">
                    {state.name}
                </Typography>
                <div className="w-full flex justify-between items-center py-[15px]">
                    <RatingProduct/>
                </div>
                <div className="w-full flex justify-between items-start">
                    <div className="w-[70%] flex justify-between">
                        <ProductImages/>
                        <ProductAtrr/>
                    </div>
                    <div className="w-[30%] px-3">
                        <ProductOrder {...state}/>
                    </div>
                </div>
            </div>
        </div>
    )
}