import React from "react"
import { data } from './../../api/mokeData'
import { Link } from "react-router-dom"
type Props = {
    display:boolean
}
export function MenuCategory({ display }: Props) {


    return (
        <ul className={`absolute left-0 w-[max-content] ${display?'hidden':'flex'} flex-col items-start top-[100%] z-[1000] mt-2`
} >
            {data.map((categor,index) => {
                return (
                    <li  className="capitalize text-[18px] py-[8px]" key={index}>
                        <Link
                            to={`/${categor}`}
                        >
                            {categor}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}