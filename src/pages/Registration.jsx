import React, {useState} from 'react';
import Container from "react-bootstrap/cjs/Container";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/cjs/Button";
import FloatingLabel from "react-bootstrap/cjs/FloatingLabel";

const Registration = () => {
    const [regData, setRegData] = useState(null);

    function handleInputsChange(key, value) {
        setRegData({...regData, [key]: value})
        console.log(regData);
    }

    function handleClick() {
        try {
            console.log(Object.keys(regData).length);
        } catch (e) {
            console.log(e.value);
        }

    }

    return (
        <Container fluid className="justify-content-center mt-5">
            <Form className="reg-container d-flex flex-column justify-content-around mx-auto">
                <div className="reg-text text-center">Регистрация</div>
                <Container>
                    <Form.Group className="mb-1" controlId="name">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Имя"
                        >
                            <Form.Control className="reg-input" type="text" placeholder="Имя"
                                          onChange={(e) => handleInputsChange("name", e.target.value)}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="surname">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Фамилия"
                        >
                            <Form.Control className="reg-input" type="text" placeholder="Фамилия"
                                          onChange={(e) => handleInputsChange("surname", e.target.value)}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="patronymic">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Отчество"
                        >
                            <Form.Control className="reg-input" type="text" placeholder="Отчество"
                                          onChange={(e) => handleInputsChange("patronymic", e.target.value)}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="login">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Придумайте логин"
                        >
                            <Form.Control className="reg-input" type="text" placeholder="Придумайте логин"
                                          onChange={(e) => handleInputsChange("login", e.target.value)}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="password">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Придумайте пароль"
                        >
                            <Form.Control className="reg-input" type="password"
                                          placeholder="Придумайте пароль"
                                          onChange={(e) => handleInputsChange("password", e.target.value)}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="rep-password">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Повторите пароль"
                        >
                            <Form.Control className="reg-input" type="password" placeholder="Повторите пароль"
                                          onChange={(e) => handleInputsChange("rep-password", e.target.value)}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="phone">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Номер мобильного телефона"
                        >
                            <Form.Control className="reg-input" type="phone"
                                          placeholder="Номер мобильного телефона"
                                          onChange={(e) => handleInputsChange("phone", e.target.value)}/>
                        </FloatingLabel>
                        <Button className="reg-btn white-text" onClick={handleClick}>Зарегистрироваться</Button>
                    </Form.Group>
                </Container>
            </Form>
        </Container>);

}

export default Registration;