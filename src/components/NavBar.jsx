import React from "react";
import { AUTH_ROUTE, LANDING_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import logo from "../assets/logo.svg";
import "../styles/custom-bootstrap.css";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import cl from "../styles/Button.module.css";

const NavBar = (props) => {
  return (
    <>
      <Box py="12px" className = "navbar-background" {...props}>
        <AppBar
          position="static"
          color="transparent"
          sx={{ boxShadow: "none" }}
        >
          <Toolbar sx={{ justifyContent: "space-around" }}>
            <img src={logo} />
            <Box sx={{ display: "flex", gap: "15px" }}>
              <Button
                href="/"
                variant="text"
                sx={{
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(126, 87, 194, 0.25)" },
                }}
                className={cl.button}
              >
                Контакты
              </Button>
              <Button
                href="/"
                variant="text"
                sx={{
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(126, 87, 194, 0.25)" },
                }}
                className={cl.button}
              >
                О нас
              </Button>
              <Button
                href={AUTH_ROUTE}
                variant="text"
                sx={{
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(126, 87, 194, 0.25)" },
                }}
                className={cl.button}
              >
                Войти
              </Button>
              <Button
                href={REGISTRATION_ROUTE}
                size="large"
                variant="contained"
              >
                Еще нет аккаунта?
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
    // <Container fluid className="navbar-background">
    //     <Navbar className="mx-1 pt-4">
    //         <Container className="justify-content-between align-items-center">
    //             <Navbar.Brand href={LANDING_ROUTE}>
    //                 <img
    //                     src={logo}
    //                     width="99"
    //                     height="26"
    //                     alt="Logo"/>
    //             </Navbar.Brand>
    //             <Nav className="gap-3">
    //                 <Nav.Link href="#home">Контакты</Nav.Link>
    //                 <Nav.Link href="#features">О нас</Nav.Link>
    //                 <Nav.Link href={AUTH_ROUTE}>Войти</Nav.Link>
    //                 <Button href={REGISTRATION_ROUTE} className="text-white"> Еще нет аккаунта?</Button>
    //             </Nav>
    //         </Container>
    //     </Navbar>
    // </Container>
  );
};

export default NavBar;
