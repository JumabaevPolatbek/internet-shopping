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
import {Link, useNavigate} from "react-router-dom";
// import { logOut } from "../../store/reducer/authSlice";
// import { getCookie } from "../../utils/getCookie";
import {logout} from "../../store/reducer/tokenSlice";
import {toast} from "react-toastify";
import { useDispatch } from "react-redux";
import {useAppSlector} from "../../utils/hook";
import {decodeJWT} from "../../utils/decodeJWT";
import {Decode} from "../../store/models/jwtDecode";
import jwtDecode from "jwt-decode";

type Props={
    token?:boolean,
    setToken?:React.Dispatch<React.SetStateAction<boolean>>
}


export function ButtonPerson() {
    const {token} = useAppSlector(state=>state.token)
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const decode:Decode = jwtDecode(token)

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };

    const handleCloseUserMenu = (e: React.MouseEvent<HTMLLIElement>) => {

          setAnchorElUser(null);

          if (e.currentTarget.textContent === 'Выйти') {

                dispatch(logout())

            } else if(e.currentTarget.textContent === 'Профиль') {

              navigate('/cabinet')
          }

    };
    const { data } = useGetAllUsersQuery()
    const findUser = data?.find(user=>user.username===decode?.sub)

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
                { decode?.is_admin>0 && <MenuItem>
                    <Typography textAlign="center">
                        <Link to='/admin'>Администратирование</Link>
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