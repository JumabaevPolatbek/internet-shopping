import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link} from 'react-router-dom';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
export function SideBarAdmin(){
    const { collapsed,collapseSidebar } = useProSidebar()
    console.log(collapsed)
    return(
        <Sidebar className='h-[100vh] border-r-[0px]' defaultCollapsed={true}>
            <div className='flex flex-col items-center bg-[#3c4b64] h-full border-[#757ce8]'>
                <Link to={'/'} className="py-4 text-[24px] text-[#fff] font-semibold">Logo</Link>
                <Menu className='flex flex-col items-center bg-[#636f83]'>
                    <MenuItem routerLink={<Link to={'dashboard'} />}>Dashboard</MenuItem>
                    <MenuItem routerLink={<Link to={'users'}/>}>Users</MenuItem>
                    <MenuItem routerLink={<Link to={'orders'}/>}>Orders</MenuItem>
                    <MenuItem routerLink={<Link to={'newproduct'}/>}>Add New Product</MenuItem>
                    <MenuItem routerLink={<Link to={'newcategory'}/>}>Add New Category</MenuItem>
                    <MenuItem routerLink={<Link to={'newcountrie'}/>}>Add New Countrie</MenuItem>
                    <MenuItem routerLink={<Link to={'newuser'}/>}>Add New User</MenuItem>
                </Menu>
                <Switch
                    {...label}
                    className='self-end'
                    onClick={() => collapseSidebar()}
                    defaultChecked={collapsed}
                />
            </div>
        </Sidebar>
    )
}