import React from "react"
import { Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Attributes } from "./Attributes/Attributes";
import { Link } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteCategoryMutation } from "../../store/api/category";
import Notification from '../../components/Notification';
import { Box } from "@mui/system";
import { useGetCategoryAttrQuery } from "../../store/api/attributes";
import { Category } from "../../store/models/categories";
import { ItemsAttr } from "./Attributes/ItemsAttr";


const ItemCategory:React.FC=(props:Partial<Category>)=>{
    const {name,id,parent_category}=props
    const [delCategory,result]=useDeleteCategoryMutation()
    const [open,setOpen]=React.useState(false)
    const [attr,setAttr]=React.useState(false)
    const {data}=useGetCategoryAttrQuery(id)
    return (
        <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
                        {name}
            </TableCell>
            <TableCell >
                    {parent_category?.name}
            </TableCell>
            <TableCell>
                <div className='flex items-center'>
                              <Attributes open={attr} setAttr={setAttr} idCategory={id}/>
                          <Link to={
                          //   location.pathname.includes('/admin/category')?
                          // `category/${category.id}`:
                          // `edit/${category.id}`
                          `edit/${id}`
                          }>
                              <IconButton color='secondary'>
                                <SettingsIcon/>
                              </IconButton>
                          </Link>
                              <IconButton 
                              onClick={()=>{
                                delCategory(id) 
                                setOpen(open=>!open)}}
                              color='primary'
                              >
                                <DeleteIcon/>
                              </IconButton>
                        </div>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                        {name} attributes
                            </Typography>
                            <ItemsAttr category_id={id}/>
                        </Box>
                    </Collapse>
            </TableCell>
        </TableRow>
        {result.isSuccess && <Notification value='Успешно удалень!' open={open} setOpen={setOpen}/>}
        </>
    )
}

export {ItemCategory}