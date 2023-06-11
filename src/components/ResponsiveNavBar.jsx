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
import AdbIcon from '@mui/icons-material/Adb';
import {orange} from "@mui/material/colors";
import {CustomButton} from "../ui/CustomButton";
import {useLocation, useNavigate, } from "react-router-dom";
import {ACCOUNT_ROUTE, EDUCATION_ROUTE, TRADING_ROUTE} from "../utils/consts";
import {AccountBalanceWalletOutlined} from "@mui/icons-material";
import {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const pages = ['Обучение', 'Практика'];
const settings = ['Профиль', 'Выйти'];

const  ResponsiveNavBar = observer(() => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const {trading} = useContext(Context);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
        console.log(e.target);
        if (e.target.textContent.toUpperCase() === 'ОБУЧЕНИЕ')
            navigate(EDUCATION_ROUTE);
        else
            navigate(TRADING_ROUTE);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
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
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                    <CustomButton
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
                    </CustomButton>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                        {pages.map((page) => (
                            <CustomButton
                                key={page}
                                round
                                size = 'small'
                                variant ={(location.pathname === EDUCATION_ROUTE && page === 'Обучение')||(location.pathname === TRADING_ROUTE && page === 'Практика') ? 'contained' : 'outlined'}
                                btnColor = {'#fff'}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </CustomButton>
                        ))}
                    </Box>
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
                    <Box sx={{ flexGrow: 0, pl: 2 }}>
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
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
})

export default ResponsiveNavBar;
