import React, {useContext} from "react";
import {AUTH_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import logo from "../assets/logo.svg";
import "../styles/custom-bootstrap.css";
import {
    AppBar, Avatar,
    Box, Button,
    Toolbar,

} from "@mui/material";
import cl from "../styles/Button.module.css";
import MyButton from "../ui/MyButton";
import {Context} from "../index";
import WalletIcon from "../ui/Icons/WalletIcon";
import {CustomButton} from "../ui/CustomButton";
import {observer} from "mobx-react-lite";

const NavBar = observer((props) => {
    const {user} = useContext(Context);

    return (
        user.isAuth
            ?
            <>
                <AppBar position='static'>
                    <Toolbar sx = {{display: 'flex', justifyContent: 'space-between', mx: '200px'}}>
                        <a href="/"><img src={logo} width='99px' height='26px' style={{cursor: 'pointer'}} alt='logo'/></a>
                        <Box display='flex' justifyContent='space-between' alignItems='center' gap='5px'>
                            <CustomButton round color='secondary' variant='outlined'>Обучение</CustomButton>
                            <Box height='20px' width='2px' sx={{background: '#fff', borderRadius: '100px'}}/>
                            <CustomButton round color='secondary' variant='contained'>Практика</CustomButton>
                        </Box>
                        <Box display='flex' justifyContent='space-between' alignItems='center' gap='32px'>
                            <CustomButton round sx={{fontSize: '16px', fontWeight: '700'}} color='secondary' variant='contained'
                                    endIcon={<WalletIcon sx={{fontSize: '24px !important', mb: '4px'}}/>}>1000$</CustomButton>
                            <CustomButton round color='secondary' variant='text'>Таблица лидеров</CustomButton>
                            <Avatar sx ={{width: '40px', height: '40px'}}/>
                        </Box>
                    </Toolbar>
                </AppBar>
            </>
            :
            <Box pt="10px" pb="25px" className="navbar-background" {...props}>
                <AppBar
                    position="static"
                    color="transparent"
                    sx={{boxShadow: "none"}}
                >
                    <Toolbar sx={{justifyContent: "space-around"}}>
                        <a href="/"><img src={logo} width='99px' height='26px' style={{cursor: 'pointer'}} alt='logo'/></a>
                        <Box sx={{display: "flex", gap: "15px"}}>
                            <MyButton
                                href="/"
                                variant="text"
                                sx={{
                                    color: "white",
                                    "&:hover": {backgroundColor: "rgba(126, 87, 194, 0.25)"},
                                }}
                                className={cl.button}
                            >
                                Контакты
                            </MyButton>
                            <MyButton
                                href="/"
                                variant="text"
                                sx={{
                                    color: "white",
                                    "&:hover": {backgroundColor: "rgba(126, 87, 194, 0.25)"},
                                }}
                                className={cl.button}
                            >
                                О нас
                            </MyButton>
                            <MyButton
                                href={AUTH_ROUTE}
                                variant="text"
                                sx={{
                                    color: "white",
                                    "&:hover": {backgroundColor: "rgba(126, 87, 194, 0.25)"},
                                }}
                                className={cl.button}
                            >
                                Войти
                            </MyButton>
                            <MyButton
                                href={REGISTRATION_ROUTE}
                                size='large'
                                variant="contained"
                            >
                                Еще нет аккаунта?
                            </MyButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
    );
});

export default NavBar;
