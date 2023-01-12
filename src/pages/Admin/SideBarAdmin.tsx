import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link,useLocation} from 'react-router-dom';

export function SideBarAdmin(){
    
    return(
        <Sidebar className='h-[100vh] border-r-[0px]'>
            <div className='flex flex-col items-center bg-[#757ce8] h-full border-[#757ce8]'>
                <Link to={'/'} className="py-4 text-[24px] text-[#da002b] font-semibold">Logo</Link>
                <Menu className='flex flex-col items-center'>
                    <MenuItem routerLink={<Link to={'dashboard'}/>}>Dashboard</MenuItem>
                    <MenuItem routerLink={<Link to={'users'}/>}>Users</MenuItem>
                    <MenuItem routerLink={<Link to={'orders'}/>}>Orders</MenuItem>
                    <MenuItem routerLink={<Link to={'newproduct'}/>}>Add New Product</MenuItem>
                    <MenuItem routerLink={<Link to={'newcategory'}/>}>Add New Category</MenuItem>
                    <MenuItem routerLink={<Link to={'newcountrie'}/>}>Add New Countrie</MenuItem>
                    <MenuItem routerLink={<Link to={'newuser'}/>}>Add New User</MenuItem>
                </Menu>
            </div>
            
        </Sidebar>
    )
}