import React from "react"
import { Link } from "react-router-dom"
import { useGetCategoriesQuery } from "../../store/api/category"
type Props = {
    display:boolean
}
export function MenuCategory({ display }: Props) {

    const { data } = useGetCategoriesQuery()
    const parent = data?.filter(category => category.children_category?.length);
    // console.log(data?.find(category => category.children_category?.map(child => {
    //     if(child.name)
    // })))
    return (
        <ul className={`absolute left-0 w-[max-content] ${display?'hidden':'flex'} flex-col items-start top-[100%] z-[1000] mt-2`
} >             
            {parent?.map(category => {
                return (
                    <li
                        className="bg-red-500"
                        key={category.id}
                    >
                        <Link
                            className="block"
                            to={`${category.name}`}
                        >
                            {category.name}
                            <ul>
                                {category.children_category?.map(child => {
                                    return <li key={child.id} className="bg-yellow-500">{ child.name}</li>
                                })}
                            </ul>
                        </Link>
                    </li>
                    
               )
           })}
        </ul>
    )
}