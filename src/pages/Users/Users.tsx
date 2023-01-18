import  React from 'react'
import { Button, Table, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import Detail from "../../components/Detail";
import { useGetAllUsersQuery } from "../../store/api/user"
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';



export function Users() {
    const { data } = useGetAllUsersQuery()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
      };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return(
        <div className="container mx-auto flex flex-col py-2">
            <div className='self-end'>
                <Link to={'add'}>
                    <Button variant='contained' color='success'>
                        Add User
                    </Button>
                </Link>
                
            </div>
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
                    return <Detail key={user.id} {...user}/>
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