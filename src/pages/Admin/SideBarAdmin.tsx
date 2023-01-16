import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link} from 'react-router-dom';
import Switch from '@mui/material/Switch';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import PeopleIcon from '@mui/icons-material/People';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// import CategoryIcon from '@mui/icons-material/Category';
// import PublicIcon from '@mui/icons-material/Public';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';

export function SideBarAdmin(){
    const { collapsed,collapseSidebar } = useProSidebar()
    return(
        <Sidebar className='h-[100vh] border-r-[0px]' defaultCollapsed={true}>
            <div className='flex flex-col items-center bg-[#3c4b64] h-full border-[#757ce8]'>
                <Link to={'/'} className="py-4 text-[24px] text-[#fff] font-semibold">Logo</Link>
                <Menu className='flex flex-col items-center bg-[#636f83]'>
                    <MenuItem routerLink={<Link to={'admin'} />}>
                        <div className='flex justify-between'>
                            <span >Dashboard</span>
                            {/* <DashboardIcon className={`block ${collapsed?'self-end':'self-end'}`} /> */}
                        </div>
                    </MenuItem>
                    <MenuItem routerLink={<Link to={'users'}/>}>Users</MenuItem>
                    <MenuItem routerLink={<Link to={'orders'}/>}>Orders</MenuItem>
                    <MenuItem routerLink={<Link to={'newproduct'}/>}>Add New Product</MenuItem>
                    <MenuItem routerLink={<Link to={'newcategory'}/>}>Add New Category</MenuItem>
                    <MenuItem routerLink={<Link to={'newcountrie'}/>}>Add New Countrie</MenuItem>
                    <MenuItem routerLink={<Link to={'newuser'}/>}>Add New User</MenuItem>
                </Menu>
                <Switch
                    className='self-end'
                    onClick={() => collapseSidebar()}
                    defaultChecked={collapsed}
                />
            </div>
        </Sidebar>
    )
}