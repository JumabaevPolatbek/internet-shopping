import Avatar from '@mui/material/Avatar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DeleteIcon from '@mui/icons-material/Delete';
import { User } from '../../store/models/userModels';
import { TableCell, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSlector } from '../../utils/hook';
import {store} from '../../store'
import { editSlice } from '../../store/reducer/edit';

export function Detail(props: User) {
    
   
    const { username, user_detail, is_admin, addresses, phone_numbers, id } = props
    const handleUser = () => {
        store.dispatch(editSlice.actions.getUser(props))
    }
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
                <button onClick={handleUser}>
                    <Link to={`edit/${id}`}>
                        <ManageAccountsIcon/>
                    </Link>
                </button>
                <button>
                    <DeleteIcon/>
                </button>
            </TableCell>
        </TableRow>
    )
}