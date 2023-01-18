import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import { Link} from 'react-router-dom';
import Switch from '@mui/material/Switch';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
import PublicIcon from '@mui/icons-material/Public';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export function SideBarAdmin(){
    const { collapsed,collapseSidebar } = useProSidebar()
    return(
        <Sidebar className='h-[100vh] border-r-[0px]' defaultCollapsed={true}>
            <div className='flex flex-col items-center bg-[#3c4b64] h-full border-[#757ce8]'>
                <Link to={'/'} className="py-4 text-[24px] text-[#fff] font-semibold">Logo</Link>
                <Menu className='flex flex-col items-center bg-[#636f83] w-full'>
                    <MenuItem routerLink={<Link to={'/admin'} />}>
                        <div className='flex justify-between'>
                            {!collapsed && <span>Dashboard</span>}
                            <DashboardIcon/>
                        </div>
                    </MenuItem>
                    <MenuItem routerLink={<Link to={'users'}/>}>
                        {!collapsed && <span>Users</span>}
                        <PeopleIcon/>
                    </MenuItem>
                        <MenuItem routerLink={<Link to={'category'}/>}>
                            {!collapsed && <span>Category</span>}
                            <CategoryIcon/>
                        </MenuItem>
                        <MenuItem routerLink={<Link to={'orders'}/>}>
                            {!collapsed && <span>Orders</span>}
                            <ShoppingCartIcon/>
                        </MenuItem>
                        <MenuItem routerLink={<Link to={'newproduct'}/>}>
                            {!collapsed && <span>Products</span>}
                            <ProductionQuantityLimitsIcon/>
                        </MenuItem>
                        <MenuItem routerLink={<Link to={'newcountrie'}/>}>
                            {!collapsed && <span>Countrie</span>}
                            <PublicIcon/>
                        </MenuItem>
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