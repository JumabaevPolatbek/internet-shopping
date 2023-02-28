import * as React from 'react';
import {useDeleteCountrieMutation} from "../../store/api/country";
import {Countrie} from "../../store/models/countries";
import {IconButton, TableCell,TableRow} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import {toast} from "react-toastify";
import CustomizedDialogs from "../../components/BootstrapDialog/CustomizedDialogs";
import {EditCountry} from "./EditCountry";

export  function DetailCountry(props:Countrie) {
    const {id,country_name}=props
    const [delCountry,result]=useDeleteCountrieMutation()
  const [open,setOpen]=React.useState(false)
    const handleDelCountry=async (id:number,name:string)=>await delCountry(id)
        .unwrap()
        .then(response=>{
            toast.success(`${name} страна успешьно удалень!`,{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            setTimeout(()=>setOpen(false),2000)
        })
        .catch(error=>toast.error(`${error.data.detail}`,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        }))
  return (
      <TableRow >
          <TableCell>{country_name}</TableCell>
          <TableCell>
              <div className='flex items-center'>
                      <IconButton
                          color='secondary'
                          onClick={()=>setOpen(true)}
                      >
                          <SettingsIcon/>
                      </IconButton>
                  <CustomizedDialogs open={open} setOpen={setOpen}>
                      <EditCountry setOpen={setOpen} country={props}/>
                  </CustomizedDialogs>
                  <IconButton
                      onClick={()=>handleDelCountry(id,country_name)}
                      color='primary'
                  >
                      <DeleteIcon/>
                  </IconButton>
              </div>
          </TableCell>
      </TableRow>
  );
}
