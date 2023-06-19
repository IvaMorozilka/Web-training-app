import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {orange} from "@mui/material/colors";
import {CustomButton} from "../ui/CustomButton";
import {useLocation, useNavigate, } from "react-router-dom";
import {ACCOUNT_ROUTE, AUTH_ROUTE, EDUCATION_ROUTE, REGISTRATION_ROUTE, TRADING_ROUTE} from "../utils/consts";
import {AccountBalanceWalletOutlined} from "@mui/icons-material";
import {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const settings = ['Профиль', 'Выйти'];

const  ResponsiveNavBar = observer(() => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const {user, trading} = useContext(Context);
    const pages =  user.isAuth ? ['Обучение', 'Практика'] : ['Войти', 'Зарегистрироваться'];


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
        switch (e.target.textContent.toUpperCase()){
            case 'ОБУЧЕНИЕ':
                navigate(EDUCATION_ROUTE);
                break;
            case 'ПРАКТИКА':
                navigate(TRADING_ROUTE);
                break;
            case 'ВОЙТИ':
                navigate(AUTH_ROUTE);
                break;
            case 'ЗАРЕГИСТРИРОВАТЬСЯ':
                navigate(REGISTRATION_ROUTE);
                break;
            default:
                navigate('/');
                break;
        }
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar
            position="static"
            color = {user.isAuth ? 'primary': 'transparent'}
            sx = {{boxShadow: user.isAuth || 'none'}}
            className={user.isAuth || 'navbar-background'}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', sm: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: '#fff',
                            textDecoration: 'none',
                        }}
                    >
                        VANILLA
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }} >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon sx = {{color: "#fff"}}/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {user.isAuth && <CustomButton
                        round
                        sx={{ fontSize: "14px", fontWeight: "600", display: { xs: 'flex', sm: 'none' }, }}
                        btnColor={'#fff'}
                        variant="contained"
                        endIcon={
                            <AccountBalanceWalletOutlined
                                sx={{ fontSize: "24px!important" }}
                            />
                        }
                    >
                        {trading.usdAmount + ' USD'}
                    </CustomButton>}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }} justifyContent={user.isAuth || 'end'} gap={user.isAuth || '10px'}>
                        {pages.map((page) => (
                            <CustomButton
                                key={page}
                                round = {user.isAuth}
                                size = 'large'
                                variant ={(location.pathname === EDUCATION_ROUTE && page === 'Обучение')||(location.pathname === TRADING_ROUTE && page === 'Практика')||(page === 'Зарегистрироваться') ? 'contained' : 'outlined'}
                                btnColor = {user.isAuth && '#fff'}
                                textColor={location.pathname === EDUCATION_ROUTE || location.pathname === TRADING_ROUTE || location.pathname === ACCOUNT_ROUTE ? undefined : '#fff' }
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </CustomButton>
                        ))}
                    </Box>
                    {user.isAuth &&
                        <Tooltip title = {'Нажмите, чтобы пополнить баланс'}>
                            <CustomButton
                                round
                                sx={{ fontSize: "14px", fontWeight: "600", display: { xs: 'none', sm: 'flex' }, }}
                                btnColor={'#fff'}
                                variant="contained"
                                endIcon={
                                    <AccountBalanceWalletOutlined
                                        sx={{ fontSize: "24px!important" }}
                                    />
                                }
                            >
                                {trading.usdAmount + ' USD'}
                            </CustomButton>
                        </Tooltip>
                        }
                    {user.isAuth &&  <Box sx={{ flexGrow: 0, pl: 2 }}>
                        <Tooltip title="Настройки">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar sx = {{bgcolor: orange[500], outline: '2px solid white'}}>B</Avatar>
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
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" onClick={(e) => e.target.textContent.toUpperCase() === 'ПРОФИЛЬ' ? navigate(ACCOUNT_ROUTE) : alert('ВЫХОДИМ')}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>}
                </Toolbar>
            </Container>
        </AppBar>
    );
})

export default ResponsiveNavBar;
