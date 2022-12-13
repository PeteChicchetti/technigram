import React from 'react';
import { Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="footer container-fluid">
            <Row className='container-fluid' style={{ margin: '0px', justifyContent: 'center', alignItems: 'center' }}>
                <Col md='4' className="footer-text">
                    <h3><a href="https://github.com/ThatBallinGuy">Tristan Ballin</a>, <a href="https://github.com/PeteChicchetti">Pete Chicchetti</a>, <a href="https://github.com/BenjaminCottrell">Ben Cottrell</a>, and <a href="https://github.com/StyngerBee">Curran Duke</a>.</h3>
                </Col>
                <Col md='4' className="footer-text">
                    <h3>Licensed by MIT</h3>
                </Col>
                <Col md='4' className="footer-text">
                    <h3>Licensed by MIT</h3>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;