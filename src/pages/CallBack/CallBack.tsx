import * as React from 'react';
import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import 'react-toastify/dist/ReactToastify.css'
import {CallBackItem} from "./CallBackItem";
import {useGetCallsQuery} from "../../store/api/call";


export  function CallBack() {
    const {data} = useGetCallsQuery()
    return (
        <div className='flex flex-col items-center p-[15px]'>
            <Paper sx={{width:'100%'}}>
                <TableContainer sx={{maxHeight:'600px',minHeight:'400px'}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={1}>
                                    Имя Фамилия
                                </TableCell>
                                <TableCell colSpan={1}>
                                    Номер телефона
                                </TableCell>
                                <TableCell colSpan={1}>
                                    Время
                                </TableCell><TableCell colSpan={1}>
                                    Коментария
                                </TableCell>
                                <TableCell>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map((call)=><CallBackItem key={call.id} {...call}/>)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </div>
    );
}
