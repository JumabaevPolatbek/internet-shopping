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
            {attrState.arrAttribute.map((attr,index)=>(
                <div className="w-full flex justify-between items-center" key={index}>
                    <TextField
                    label={attr.attribute.attribute_name}
                    value={attr.attribute.attribute_name}
                    type="text"
                    />
                    {attr.variants.map(variant=>(
                        <TextField
                            label={variant.value}
                            value={variant.value}
                            type="text"
                        />
                    ))}
                </div>
            ))}
            <IconButton
            onClick={()=>dispatch(increase({
                attribute:{
                    attribute_name:'',
                    category_id:0
                },
                variants:[]
            }))}>
                <ControlPointIcon/>
            </IconButton>
        </form>
    )
}