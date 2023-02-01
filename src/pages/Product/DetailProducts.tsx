import * as React from 'react';
import { useDeleteProductMutation, useGetProductsQuery } from '../../store/api/product';
import { useLocation } from 'react-router-dom';
// import {}
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Avatar, Button, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import Notification from '../../components/Notification';
import { SearchProduct } from '../../components/Search';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';

const arrColumn=['Фото','Имя устройства','Описание','Категория','Цена','Количество','Дисконт','Действия']

export  function DetailProducts() {
  const {data}=useGetProductsQuery()
  const [delProduct,result]=useDeleteProductMutation()
  const location = useLocation()
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [open,setOpen]=React.useState(false)
  const [attr,setAttr]=React.useState(false)
  return (
    <div className='flex flex-col items-center p-[15px]'>
      {
        location.pathname.includes('admin/products') && 
        <div className='flex justify-between w-full'>
          <Button
              variant='contained'
              color='success'
              className='self-start'
            >
              <Link to={'add'}>Create Product</Link>
            </Button>
            <SearchProduct/>
        </div>
      }
      
      <Paper sx={{ width: '100%',margin:'10px 0 0 0' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left" colSpan={3}>
                  Продукты
                </TableCell>
                <TableCell align="left" colSpan={5}>
                  Информация
                </TableCell>
              </TableRow>
              <TableRow>
                {arrColumn.map((column,index)=>{
                  return <TableCell key={index}>
                      {column}
                  </TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map(product=>{
                  return <TableRow key={product.id}>
                      <TableCell>
                        <Avatar 
                        sx={{width:'56px',height:'56px'}}
                        src={product.images[0].image_path}/>
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.description}</TableCell>
                      <TableCell>{product.category.name}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>{product.discount}</TableCell>
                      <TableCell>
                        <div className='flex items-center'>
                            {/* <Tooltip title="Add Attribute" arrow>
                              <IconButton 
                              onClick={()=>setAttr(true)}
                              color='error'> */}
                                {/* <TextIncreaseIcon/> */}
                                {/* <Attributes open={attr} setAttr={setAttr}/> */}
                              {/* </IconButton> */}
                            {/* </Tooltip> */}
                            <Tooltip title="Edit Product" arrow>
                          <Link to={location.pathname.includes('/admin/products')
                          ?`edit/${product.id}`:
                          `products/edit/${product.id}`}
                        >
                              <IconButton color='secondary'>
                                <SettingsIcon/>
                              </IconButton>
                          </Link>
                            </Tooltip>
                            <Tooltip title="Delete Product" arrow>
                              <IconButton 
                              onClick={()=>{
                                delProduct(product.id) 
                                setOpen(open=>!open)}}
                              color='primary'
                              >
                                <DeleteIcon/>
                              </IconButton>
                            </Tooltip>
                        </div>
                      </TableCell>
                  </TableRow>
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={4}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {result.isSuccess && <Notification value='Продукт удалено' open={open} setOpen={setOpen}/>}
      {result.isError && <Notification value='Ошибка' open={open} setOpen={setOpen}/>}
    </div>
  );
}