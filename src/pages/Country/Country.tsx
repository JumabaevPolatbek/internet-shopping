import * as React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import { useGetAllCountriesQuery } from '../../store/api/country';
import { SearchCountry } from '../../components/Search';
import {DetailCountry} from "./DetailCountry";
import {useLocation} from "react-router-dom";


export  function Country() {
    const { data } = useGetAllCountriesQuery()
    const location= useLocation()
    return (
        <div className='flex flex-col items-center p-[15px]'>
            {
                location.pathname.includes('admin/country') &&
                <div className='w-full flex justify-between px-3'>
                    <Button
                        variant='contained'
                        color='success'
                        className='self-start'
                    >
                        Create Country
                    </Button>
                    <SearchCountry/>
                </div>
            }
            <Paper sx={{width:'100%'}}>
                <TableContainer sx={{maxHeight:'600px',minHeight:'400px'}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={1}>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map(country=>{
                                return <DetailCountry key={country.id} {...country}/>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}
