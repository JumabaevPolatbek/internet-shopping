import { IconButton, TextField } from "@mui/material";
import { useForm,SubmitHandler } from "react-hook-form"
import { useAppDispatch, useAppSlector } from "../../../utils/hook"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { increase } from "../../../store/reducer/addAtrribute";

export function FormAttr(){
    const attrState=useAppSlector(state=>state.stateAttribute);
    const dispatch=useAppDispatch()
    console.log(attrState)
    return(
        <form>
            
            {/* <IconButton
            onClick={()=>dispatch(increase({
                attribute:{
                    attribute_name:'',
                    category_id:0
                },
                variants:[]
            }))}> */}
                {/* <ControlPointIcon/> */}
            {/* </IconButton> */}
        </form>
    )
}