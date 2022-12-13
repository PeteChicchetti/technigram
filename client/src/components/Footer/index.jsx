import React from 'react';
import { Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="footer container-fluid">
        <Row className='container-fluid' style={{ margin:'0px', justifyContent: 'center', alignItems: 'center'}}>
            <Col md='6' className='footer-text'>
                <h3>Developed by Pete Chicchetti, Tristan Ballin, Ben Cottrell, and Curran Duke</h3>
            </Col>
            <Col md='6' className='footer-text'>
                <h3>Licensed by MIT</h3>
            </Col>
        </Row>
        </div>
    )
}

export default Footer;