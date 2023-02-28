import * as React from "react";
import { useDelUserMutation } from '../../store/api/user';
import { User } from '../../store/models/userModels';
import {toast} from "react-toastify";
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton, TableCell, TableRow, Tooltip} from '@mui/material';
import SettingsIcon from "@mui/icons-material/Settings";
import CustomizedDialogs from "../../components/BootstrapDialog/CustomizedDialogs";
import {EditUser} from "./Edituser/EditUser";

export function DetailUser(props: User) {

    const [deleteUser,result]=useDelUserMutation()

    const { username, user_detail, is_admin, addresses, phone_numbers, id } = props
    const handleDelUser= async (id:number,name:string) => await deleteUser(id)
        .unwrap()
        .then(response=>{
            toast.success(`${response.username} успешьно удален`,{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
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
    const [open,setOpen]=React.useState(false)
    return (
        <TableRow>
            <TableCell align='center'>
                <Avatar
                    alt={username}
                    src={user_detail.user_image}
                />
            </TableCell>
            <TableCell align='center'>
                {username}
            </TableCell>
            <TableCell align='center'>
                {is_admin?'Admin':'User'}
            </TableCell>
            <TableCell align='center'>
                {user_detail.first_name}
            </TableCell>
            <TableCell align='center'>
                {addresses[0].city}
            </TableCell>
            <TableCell align='center'>
                {phone_numbers[0].phone_number}
            </TableCell>
            <TableCell align='center'>
                <div className='flex items-center'>

                    <Tooltip title="Изменение аккаунта" arrow>
                        <IconButton
                            color='secondary'
                            onClick={()=>setOpen(true)}
                        >
                            <SettingsIcon/>
                        </IconButton>
                    </Tooltip>
                    <CustomizedDialogs open={open} setOpen={setOpen}>
                        <EditUser user={props} setOpen={setOpen}/>
                    </CustomizedDialogs>
                    <Tooltip title="Удаление аккаунта" arrow>
                        <IconButton
                            color='primary'
                            onClick={()=>handleDelUser(id,username)}
                        >
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
            </TableCell>
        </TableRow>
    )
}