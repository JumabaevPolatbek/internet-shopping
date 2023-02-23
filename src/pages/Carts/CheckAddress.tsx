import {Checkbox, Divider, TextField} from "@mui/material";
import {Address} from "../../store/models/userModels";
import React from 'react'
import {useDispatch} from "react-redux";
import {addAddress} from "../../store/reducer/cartProduct";


type Props={
    address:Address
}

export const CheckAddress = React.forwardRef<HTMLInputElement,Props>(({address},ref) => {
    const dispatch = useDispatch()
    return (
        <div
            className="flex flex-col"
        >
           <div
            className="flex justify-between items-center py-3"
           >
               <span>
                   {address.city
                       +','+address.street_address
                       +','+address.postal_code
                   }
               </span>
                <Checkbox
                       color="error"
                       // inputRef={ref}
                       name="address"
                       onChange={()=>dispatch(addAddress(address))}
                   />

               </div>
            <Divider/>
        </div>
    )
})