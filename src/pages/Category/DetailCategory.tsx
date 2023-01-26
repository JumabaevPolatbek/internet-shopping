import * as React from 'react';
import { useDeleteCategoryMutation, useGetCategoriesQuery } from '../../store/api/category';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import Notification from '../../components/Notification';


export  function DetailCategory() {
  const {data} = useGetCategoriesQuery()
  const [delCategory,result]=useDeleteCategoryMutation()
  const location = useLocation()
  const [open,setOpen]=React.useState(false)
  return (
    <div className='flex flex-col items-center p-[15px]'>
      {
        location.pathname.includes('admin/category') &&  <Button
          variant='contained'
          color='success'
          className='self-start'
        >
          <Link to={'add'}>Create Category</Link>
          </Button>
      }
      <Paper sx={{width:'100%'}}>
          <TableContainer sx={{maxHeight:'400px'}}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={1}>
                      Name
                    </TableCell>
                    <TableCell colSpan={1}>
                      Parent Category
                    </TableCell>
                    <TableCell>
                      Actions
                    </TableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.map(category=>{
                      return <TableRow key={category.id}>
                          <TableCell>{category.name}</TableCell>
                          <TableCell>{category.parent_category?.name}</TableCell>
                          <TableCell>
                            <div className='flex items-center'>
                          <Link to={
                          //   location.pathname.includes('/admin/category')?
                          // `category/${category.id}`:
                          // `edit/${category.id}`
                          `edit/${category.id}`
                          }>
                              <IconButton color='secondary'>
                                <SettingsIcon/>
                              </IconButton>
                          </Link>
                              <IconButton 
                              onClick={()=>{
                                delCategory(category.id) 
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
