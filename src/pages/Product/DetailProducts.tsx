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
import CustomizedDialogs from "../../components/BootstrapDialog/CustomizedDialogs";
import {NewAddProduct} from "./Add/NewProduct";
import {toast} from "react-toastify";

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

  const handleDelProduct = async (id:number,name:string)=> await delProduct(id)
      .then(response=>{
        toast.success(`${name} has added`,{
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      })
      .catch(error=>{
        toast.error(`${error.data.detail}`,{
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      })

  const [open,setOpen]=React.useState(false)

  return (
    <div className='flex flex-col items-center p-[15px]'>
      {
        location.pathname.includes('admin/products') &&
          <>
        <div className='flex justify-between w-full'>
          <Button
              variant='contained'
              color='success'
              className='self-start'
              onClick={()=>setOpen(true)}
            >
              Create Product
            </Button>
            <SearchProduct/>
        </div>
            <CustomizedDialogs open={open} setOpen={setOpen}>
              <NewAddProduct setOpen={setOpen}/>
            </CustomizedDialogs>
          </>
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
                              color='primary'
                              onClick={()=>handleDelProduct(product.id,product.name)}
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

    </div>
  );
}