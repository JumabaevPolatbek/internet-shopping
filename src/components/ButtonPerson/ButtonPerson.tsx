import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import {Cookies} from 'react-cookie'
import { useGetAllUsersQuery } from "../../store/api/user";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/reducer/authSlice";
import { getCookie } from "../../utils/getCookie";
import { useDispatch } from "react-redux";

export function ButtonPerson() {
  const dispatch=useDispatch()
  const cookie = new Cookies()
  const navigate = useNavigate()
  
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };
  const handleCloseUserMenu = (e: React.MouseEvent<HTMLLIElement>) => {
          setAnchorElUser(null);
          if (e.currentTarget.textContent === 'Выйти') {
              cookie.remove('token')
              dispatch(logOut)
              navigate('/',{replace:true})
            } else if(e.currentTarget.textContent === 'Профиль') {
              navigate('/cabinet')
          }
    };
    const { data } = useGetAllUsersQuery()
    const findUser = data?.find(user=>user.username===getCookie(cookie)?.sub)
    // console.log(decode)
    // console.log(findUser)
    return (
        <Box
            sx={{ flexGrow: 0 }}
            className="ml-6"
        >
            <Tooltip title="Профиль">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={findUser?.user_detail.user_image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={(e)=>handleCloseUserMenu(e)}>
                    <Typography textAlign="center">
                        Профиль
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                        Выйти
                  </Typography>
                </MenuItem>
            </Menu>
          </Box>
    )
}