import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import {Form} from "react-bootstrap";
import {REGISTRATION_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/cjs/Button";

const Auth = () => {
    return (

        <Container className="d-flex justify-content-center mt-5">
            <Form className="login-container d-flex flex-column justify-content-around">
                <div className="login-text text-center">Войти</div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className="input" type="login" placeholder="Логин"/>
                </Form.Group>
                <Form.Group className="mb-0" controlId="formBasicPassword">
                    <Form.Control className="input" type="password" placeholder="Пароль"/>
                </Form.Group>

                <Form.Group className="mb-4 d-flex flex-row justify-content-between align-items-baseline"
                            controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Запомнить меня"/>
                    <a href={REGISTRATION_ROUTE}>Забыли пароль?</a>
                </Form.Group>

                <Form.Group className="d-flex flex-column justify-content-between gap-1 mb-2" controlId="formButtons">
                    <Button className="auth-btn text-white">Войти</Button>
                    <Button className="auth-btn text-white">Создать аккаунт</Button>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Auth;