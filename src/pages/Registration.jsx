import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import up from "../assets/hero-bg-up.svg";
import {Form} from "react-bootstrap";
import {REGISTRATION_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/cjs/Button";
import Image from "react-bootstrap/cjs/Image";
import down from "../assets/hero-bg-down.svg";
import FloatingLabel from "react-bootstrap/cjs/FloatingLabel";

const Registration = () => {
<<<<<<< Updated upstream
    return (
        <Container fluid className="background px-0 overflow-auto">
            <Container fluid className="d-flex flex-column justify-content-between h-100 px-0">
                <Row>
                    <Image
                        src={up}
                        className="img-fluid w-100"
                        alt="up background"
                    />
                </Row>
                <Row className="content justify-content-center mt-4 ">
                    <Form className="reg-container d-flex flex-column justify-content-around">
                        <div className="reg-text text-center">Регистрация</div>
                        <Container>
=======
    const [regData, setRegData] = useState(null);

    function handleInputsChange(key, value) {
        setRegData({...regData, [key]: value})
        console.log(regData);
    }

    function handleClick() {
        try {
            console.log(Object.keys(regData).length);
        }
        catch (e) {
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
                    </Form.Group>
>>>>>>> Stashed changes

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Имя"
                                >
                                    <Form.Control className="reg-input" type="text" placeholder="Имя"/>
                                </FloatingLabel>
                            </Form.Group>



                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="reg input" type="text" placeholder="Фамилия"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="reg input" type="text" placeholder="Отчество"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="reg input" type="text" placeholder="Придумайте логин"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="reg input" type="text" placeholder="Придумайте пароль"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="reg input" type="text" placeholder="Повторите пароль"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="reg input" type="text"
                                              placeholder="Номер мобильного телефона"/>
                            </Form.Group>
                            <Form.Group className="d-flex flex-column justify-content-between gap-1 mb-2"
                                        controlId="formButton">
                                <Button className="reg-btn">Зарегистрироваться</Button>
                            </Form.Group>
                        </Container>
                    </Form>
                </Row>
                <Row className="none">
                    <Image src={down}
                           className="img-fluid"
                    />
                </Row>
            </Container>
        </Container>
    );
};

export default Registration;