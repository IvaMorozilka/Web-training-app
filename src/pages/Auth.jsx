import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import up from "../assets/hero-bg-up.svg";
import Image from "react-bootstrap/cjs/Image";
import down from "../assets/hero-bg-down.svg";
import {Form} from "react-bootstrap";
import {REGISTRATION_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/cjs/Button";

const Auth = () => {
    return (
        <Container fluid className="px-0 overflow-auto">
            <Container fluid className="d-flex flex-column justify-content-between h-100 px-0">
                <Row className="content justify-content-center mt-4 ">
                    <Form className="login-container d-flex flex-column justify-content-around">

                        <div className="login-text text-center">Войти</div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className="input" type="login" placeholder="Логин"/>
                        </Form.Group>
                        <Form.Group className="mb-0" controlId="formBasicPassword">
                            <Form.Control className="input" type="password" placeholder="Пароль"/>
                        </Form.Group>

                        <Form.Group className="mb-4 d-flex flex-row justify-content-between align-items-baseline" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Запомнить меня"/>
                            <a href={REGISTRATION_ROUTE}>Забыли пароль?</a>
                        </Form.Group>

                        <Form.Group className="d-flex flex-column justify-content-between gap-1 mb-2" controlId="formButtons">
                            <Button className="auth-btn">Войти</Button>
                            <Button className="auth-btn">Создать аккаунт</Button>
                        </Form.Group>
                    </Form>
                </Row>
                <Row className="none">
                    <Image src={down} className="img-fluid"/>
                </Row>
            </Container>
        </Container>
    );
};

export default Auth;