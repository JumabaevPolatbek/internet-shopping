import {Checkbox, Divider, TextField} from "@mui/material";
import {Address} from "../../store/models/userModels";
import React from 'react'
import {UseFormSetValue} from "react-hook-form";
import {Order, OrderDetail} from "../../store/models/orders";

type Props={
    address:Address
}

export const CheckAddress = React.forwardRef<HTMLInputElement,Props>(({address},ref) => {
    return (
        <div
            className="flex flex-col"
        >
           <div
            className="flex justify-between items-center py-3"
           >
                  <span>
                      Адресс доставки
                  </span>
               <span>
                   {address.city
                       +','+address.street_address
                       +','+address.postal_code
                   }
               </span>
               <Checkbox
                   color="error"
                   inputRef={ref}

           />

               </div>
            <Divider/>
        </div>
    )
})