import * as React from 'react';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import Notification from '../../components/Notification';
import { useDeleteCountrieMutation, useGetAllCountriesQuery } from '../../store/api/country';
import { SearchCountry } from '../../components/Search';


export  function DetailCountry() {
    const { data } = useGetAllCountriesQuery()
    const [delCountry,result]=useDeleteCountrieMutation()
  const location = useLocation()
  const [open,setOpen]=React.useState(false)
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
            <Link to={'add'}>Create Country</Link>
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
                      return <TableRow key={country.id}>
                          <TableCell>{country.country_name}</TableCell>
                          <TableCell>
                            <div className='flex items-center'>
                          <Link to={
                          //   location.pathname.includes('/admin/category')?
                          // `category/${category.id}`:
                          // `edit/${category.id}`
                          `edit/${country.id}`
                          }>
                              <IconButton color='secondary'>
                                <SettingsIcon/>
                              </IconButton>
                          </Link>
                              <IconButton 
                              onClick={()=>{
                                delCountry(country.id) 
                                setOpen(open=>!open)}}
                              color='primary'
                              >
                                <DeleteIcon/>
                              </IconButton>
                        </div>
                          </TableCell>
                      </TableRow>
                    })}
                  </TableBody>
              </Table>
          </TableContainer>
      </Paper>
      {result.isSuccess && <Notification value='Успешно удалень!' open={open} setOpen={setOpen}/>}
    </div>
  );
}
