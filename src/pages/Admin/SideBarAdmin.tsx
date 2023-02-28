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
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { Tooltip } from '@mui/material';
export function SideBarAdmin(){
    const { collapsed,collapseSidebar } = useProSidebar()
    return (
        <div className='relative'>
                <Sidebar className='h-[100vh] border-r-[0px]' defaultCollapsed={true}>
            <div className='flex flex-col items-center bg-[#3c4b64] h-full border-[#757ce8]'>
                <div className='w-full px-5 flex justify-between items-center'>
                        {!collapsed && <Link to={'/'} className="py-4 text-[24px] text-[#fff] font-semibold">Logo</Link>}
                        {/* {!collapsed && <button onClick={() => collapseSidebar()}>
                            <ClearAllIcon/>
                        </button>}
                        {collapsed &&  */}
                        <button
                                className=' rounded py-4'
                                onClick={()=>collapseSidebar()}
                            >
                                    <DehazeIcon/>
                                </button>
                                {/* } */}
                </div>
                <Menu className='flex flex-col items-center bg-[#636f83]'>
                    <MenuItem routerLink={<Link to={'/admin'} />}>
                        <Tooltip title={collapsed && 'Dashboard'} placement="right">
                        <div className='flex justify-between items-center w-full'>
                            {!collapsed && <span>Dashboard</span>}
                            <DashboardIcon  />
                        </div>
                        </Tooltip>
                        
                    </MenuItem>
                    <MenuItem routerLink={<Link to={'orders'} />}>
                        <Tooltip title={collapsed && 'Orders'} placement="right">
                        <div className='flex justify-between items-center w-full'>
                        {!collapsed && <span>Orders</span>}
                        <ProductionQuantityLimitsIcon/>
                        </div>
                        </Tooltip>
                        
                    </MenuItem>
                    <MenuItem routerLink={<Link to={'products'} />}>
                        <Tooltip title={collapsed && 'Products'} placement="right">
                        <div className='flex justify-between items-center w-full'>
                        {!collapsed && <span>Products</span>}
                        <ShoppingCartIcon/>
                        </div>
                        </Tooltip>
                    </MenuItem>
                    <MenuItem routerLink={<Link to={'users'} />}>
                        <Tooltip title={collapsed && 'Users'} placement="right">
                        <div className='flex justify-between items-center w-full'>
                            {!collapsed && <span>Users</span>}
                            <PeopleIcon/>
                        </div>
                        </Tooltip>
                    </MenuItem>
                    <MenuItem routerLink={<Link to={'category'}/>}>
                        <Tooltip title={collapsed && 'Category'} placement="right">
                        <div className='flex justify-between items-center w-full'>
                            {!collapsed && <span>Category</span>}
                            <CategoryIcon/>
                        </div>
                        </Tooltip>
                    </MenuItem>
                    <MenuItem routerLink={<Link to={'country'}/>}>
                        <Tooltip title={collapsed && 'Countrie'} placement="right">
                        <div className='flex justify-between items-center w-full'>
                            {!collapsed && <span>Countrie</span>}
                            <PublicIcon/>
                        </div>
                        </Tooltip>
                    </MenuItem>
                </Menu>
                    </div>
            </Sidebar>
            </div>
    )
}