import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import bitcoin from "../assets/bitcoin.svg";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Image from "react-bootstrap/cjs/Image";

const Landing = () => {
    return (
        <Container fluid>
            <Row className="content flex-wrap px-auto">
                <Col className="landing-text my-auto">От новичка до профи: освой <span className="crypto-trading-text">крипто трейдинг</span> с
                    нашей
                    платформой!
                </Col>
                <Col className="text-center">
                    <Image
                        src={bitcoin}
                        width="350px"
                        alt="bitcoin logo"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Landing;