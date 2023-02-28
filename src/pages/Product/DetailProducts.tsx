import * as React from 'react';
import { useDeleteProductMutation, useGetProductsQuery } from '../../store/api/product';
import { useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { SearchProduct } from '../../components/Search';
import CustomizedDialogs from "../../components/BootstrapDialog/CustomizedDialogs";
import {NewAddProduct} from "./Add/NewProduct";
import {PageProduct} from "./Product";

const arrColumn=['Фото','Имя устройства','Описание','Категория','Цена','Количество','Дисконт','Действия']

export  function DetailProducts() {
  const {data}=useGetProductsQuery()
  const location = useLocation()
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open,setOpen]=React.useState(false)
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
              {data?.map(product=> <PageProduct {...product} key={product.id}/>
              )}
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