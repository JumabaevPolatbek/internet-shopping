import React from "react";
import {useAppSlector} from "../../utils/hook";
import { useGetAllUsersQuery } from "../../store/api/user";
import { useDispatch } from "react-redux";
import {logout} from "../../store/reducer/tokenSlice";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import {NavLink, useNavigate} from "react-router-dom";
import {decodeJWT} from "../../utils/decodeJWT";




export function ButtonPerson() {
    const {token}=useAppSlector(state=>state.token)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };


    const handleCloseUserMenu = (e: React.MouseEvent<HTMLLIElement>) => {

          setAnchorElUser(null);

          if (e.currentTarget.textContent === 'Выйти') {

                dispatch(logout())
                navigate('/')

            } else if(e.currentTarget.textContent === 'Профиль') {

              navigate('/cabinet')
          }

    };
    const { data } = useGetAllUsersQuery()
    const findUser = data?.find(user=>user.username===decodeJWT(token).sub)
    return (
        <Box
            sx={{ flexGrow: 0 }}
            className="ml-6"
        >
            <Tooltip title="Профиль">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={findUser?.user_detail.first_name+' '+findUser?.user_detail.first_name} src={findUser?.user_detail.user_image} />
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
                        <NavLink
                            className={({isActive})=>`${isActive?'text-[#da002b]':''}`}
                            to='/personal'
                        >Профиль</NavLink>
                  </Typography>
                </MenuItem>
                { findUser?.is_admin && <MenuItem>
                    <Typography textAlign="center">
                        <NavLink
                            className={({isActive})=>`${isActive?'text-[#da002b]':''}`}
                            to='/admin'
                        >Администратирование</NavLink>
                    </Typography>
                </MenuItem>}
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                        Выйти
                  </Typography>
                </MenuItem>

            </Menu>
          </Box>
    )
}