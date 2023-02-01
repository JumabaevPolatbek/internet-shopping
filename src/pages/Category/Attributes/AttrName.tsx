import { useAppSlector } from "../../../utils/hook"




export function AttrName(){

    const stateVariant=useAppSlector(state=>state.stateAttribute)
    return(
        <div>

        </div>
    )
}