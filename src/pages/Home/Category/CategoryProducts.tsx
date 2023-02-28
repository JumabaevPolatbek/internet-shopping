import {useLocation} from "react-router-dom";


export function CategoryProducts(){
    const {state} = useLocation()
    console.log(state)
    return(
        <div>

        </div>
    )
}