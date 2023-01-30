import { Link } from "react-router-dom"
import { useNestChildCategoryQuery } from "../../store/api/category"


export function NestedList({parent_id}:{parent_id?:number}) {
    const { data } = useNestChildCategoryQuery()
    return (
        <ul className="flex flex-wrap justify-around">
            {data?.find(category => category.parent_category?.id === parent_id) && 
                data?.map(category => (
                    <li
                        key={category.id}
                        className="py-2 px-4"
                    >
                        <Link to={`category/${category.id}`}>
                            {category.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}