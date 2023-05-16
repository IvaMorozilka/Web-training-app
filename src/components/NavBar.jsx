import React from 'react';
import {Nav, Navbar} from "react-bootstrap/cjs";
import Container from "react-bootstrap/cjs/Container";
import {AUTH_ROUTE, LANDING_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/cjs/Button";
import logo from "../assets/logo.svg";
import "../styles/custom-bootstrap.css"

const NavBar = () => {
    return (
        <Container fluid className="navbar-background">
            <Navbar className="mx-1 pt-4">
                <Container className="justify-content-between align-items-center">
                    <Navbar.Brand href={LANDING_ROUTE}>
                        <img
                            src={logo}
                            width="99"
                            height="26"
                            alt="Logo"/>
                    </Navbar.Brand>
                    <Nav className="gap-3">
                        <Nav.Link href="#home">Контакты</Nav.Link>
                        <Nav.Link href="#features">О нас</Nav.Link>
                        <Nav.Link href={AUTH_ROUTE}>Войти</Nav.Link>
                        <Button href={REGISTRATION_ROUTE}> Еще нет аккаунта?</Button>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavBar;