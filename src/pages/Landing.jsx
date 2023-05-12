import React from 'react';
import "../styles/landing.css"
import Container from "react-bootstrap/cjs/Container";
import up from "../assets/hero-bg-up.svg";
import down from "../assets/hero-bg-down.svg";
import bitcoin from "../assets/bitcoin.svg";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Image from "react-bootstrap/cjs/Image";

const Landing = () => {
    return (
        <div className="landing">
            <Container fluid className="d-flex flex-column justify-content-between h-100 px-0">
                <Row>
                    <img
                        src={up}
                        className="img-fluid w-100"
                        alt="up background"
                    />
                </Row>
                <Row className="landing-content">
                    <Col className="landing-text my-auto">От новичка до профи: освой <span className="crypto-trading-text">крипто трейдинг</span> с нашей
                        платформой!
                    </Col>
                    <Col className="text-center">
                        <img
                            src={bitcoin}
                            className="img-fluid"
                            alt="bitcoin logo"
                        />
                    </Col>
                </Row>
                <Row>
                    <Image src={down} className="img-fluid w-100"/>
                </Row>
            </Container>
        </div>
    );
};

export default Landing;