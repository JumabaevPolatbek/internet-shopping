import React from "react"
import { IconButton,  TableCell,  TableRow } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import {toast} from "react-toastify";
import {useRemoveCallMutation} from "../../store/api/call";
import {ResponseCallBack} from "../../store/models/callBack";


const CallBackItem:React.FC=(props:Partial<ResponseCallBack>)=>{
    const {full_name,id,start_time,end_time,comment,phone_number}=props
    const [removeCall,result]=useRemoveCallMutation()
    const handleDelCategory = async () => await removeCall(id)
        .then((response)=>{
        toast.success(`${full_name} category have remove!`,{
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    })
    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row">
                    {full_name}
                </TableCell>
                <TableCell component="th" scope="row">
                    {phone_number}
                </TableCell>
                <TableCell >
                    {start_time}  {end_time}
                </TableCell>
                <TableCell >
                    {comment}
                </TableCell>
                <TableCell>
                    <div className='flex items-center'>
                        <IconButton
                            onClick={handleDelCategory}
                            color='primary'
                        >
                            <DeleteIcon/>
                        </IconButton>
                    </div>
                </TableCell>
            </TableRow>
        </>
    )
}

export {CallBackItem}