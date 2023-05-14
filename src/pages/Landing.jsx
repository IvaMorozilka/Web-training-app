import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import up from "../assets/hero-bg-up.svg";
import down from "../assets/hero-bg-down.svg";
import bitcoin from "../assets/bitcoin.svg";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Image from "react-bootstrap/cjs/Image";

const Landing = () => {
    return (
        <Container fluid className="landing px-0 overflow-auto">
            <Container fluid className="d-flex flex-column justify-content-between h-100 px-0">
                <Row>
                    <img
                        src={up}
                        className="img-fluid w-100"
                        alt="up background"
                    />
                </Row>
                <Row className="landing-content flex-wrap">
                    <Col className="landing-text my-auto">От новичка до профи: освой <span className="crypto-trading-text">крипто трейдинг</span> с нашей
                        платформой!
                    </Col>
                    <Col className="text-center">
                        <img
                            src={bitcoin}
                            width="350px"
                            alt="bitcoin logo"
                        />
                    </Col>
                </Row>
                <Row className="none">
                    <Image src={down} className="img-fluid"/>
                </Row>
            </Container>
        </Container>
    );
};

export default Landing;