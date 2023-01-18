import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
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
export function SideBarAdmin(){
    const { collapsed,collapseSidebar } = useProSidebar()
    return (
        <div className='relative'>
                <Sidebar className='h-[100vh] border-r-[0px]' defaultCollapsed={true}>
            <div className='flex flex-col items-center bg-[#3c4b64] h-full border-[#757ce8]'>
                <div className='w-full px-5 flex justify-between items-center'>
                        <Link to={'/'} className="py-4 text-[24px] text-[#fff] font-semibold">Logo</Link>
                        {!collapsed && <button onClick={() => collapseSidebar()}>
                            <ClearAllIcon/>
                        </button>}
                </div>
                <Menu className='flex flex-col items-center bg-[#636f83]'>
                    <MenuItem routerLink={<Link to={'/admin'} />}>
                        <div className='flex justify-between items-center w-full'>
                            {!collapsed && <span>Dashboard</span>}
                            <DashboardIcon  />
                        </div>
                    </MenuItem>
                    <MenuItem routerLink={<Link to={'users'} />}>
                        <div className='flex justify-between items-center w-full'>
                            {!collapsed && <span>Users</span>}
                            <PeopleIcon/>
                        </div>
                    </MenuItem>
                    <MenuItem routerLink={<Link to={'orders'} />}>
                        <div className='flex justify-between items-center w-full'>
                        {!collapsed && <span>Orders</span>}
                        <ShoppingCartIcon/>
                        </div>
                    </MenuItem>
                </Menu>
                    </div>
            </Sidebar>
                {
                collapsed && <button
                    className='absolute top-0 right-[-20px] bg-[#636f83] rounded'
                    onClick={()=>collapseSidebar()}
                >
                                    <DehazeIcon/>
                                </button>
                }
               
            </div>
    )
}