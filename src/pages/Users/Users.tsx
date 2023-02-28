import  React from 'react'
import { Button, Table, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useGetAllUsersQuery } from "../../store/api/user"
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { SearchUser } from '../../components/Search';
import {DetailUser} from "./DetailUser";
import CustomizedDialogs from "../../components/BootstrapDialog/CustomizedDialogs";
import {NewUser} from "./NewUser/NewUser";


export function Users() {
    const { data } = useGetAllUsersQuery()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const location = useLocation()
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
      };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [open,setOpen]=React.useState(false)
    return(
        <div className="container mx-auto flex flex-col py-2">
            {location.pathname.includes('admin/users') && 
                <div className='w-full flex items-center justify-between px-[15px] py-3'>
                        <Button
                            variant='contained'
                            color='success'
                            onClick={()=>setOpen(true)}
                        >
                            Add User
                        </Button>
                    <CustomizedDialogs open={open} setOpen={setOpen}>
                        <NewUser setOpen={setOpen}/>
                    </CustomizedDialogs>
                    <SearchUser/>
                </div>
            }
            <div>
                <TableContainer sx={{maxHeight:'500px',minHeight:'300px'}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Avatar
                                        </TableCell>
                                    <TableCell align="center">
                                        Login
                                </TableCell>
                                <TableCell align="center">
                                    Role
                                </TableCell>
                                    <TableCell align="center">
                                        Username
                                        </TableCell>
                                    <TableCell align="center">
                                        City
                                        </TableCell>
                                    <TableCell align="center">
                                        PhoneNumber
                                        </TableCell>
                                    <TableCell align="center">
                                        Actions
                                        </TableCell>
                                </TableRow>
                        </TableHead>
                        {!data && <CircularProgress />}
                
                {data?.map((user) => {
                    return <DetailUser key={user.id} {...user}/>
                })}
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data?.length||0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </div>
    )
}