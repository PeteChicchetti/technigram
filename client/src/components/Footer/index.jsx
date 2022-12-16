import React from 'react';
import { Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer-contain">
        <div className="footer container-fluid">
            <Row className='footer-row container-fluid' style={{ margin: "0px" }}>
                <Col md='4' className="footer-text">
                    <h3>Made by: <a href="https://github.com/ThatBallinGuy">Tristan Ballin</a>, <a href="https://github.com/PeteChicchetti">Pete Chicchetti</a>, <a href="https://github.com/BenjaminCottrell">Ben Cottrell</a>, and <a href="https://github.com/StyngerBee">Curran Duke</a>.</h3>
                </Col>
                <Col md='4' className="footer-text">
                    <Row id="license-credit" className="container-fluid"><div>Licensed under <a className= "license" href="https://opensource.org/licenses/mit-license.php">MIT</a></div>
                     <div><a href="https://www.freepik.com/free-vector/blue-futuristic-networking-technology_15082511.htm#query=technology%20background&position=0&from_view=keyword">Image by rawpixel.com</a> on Freepik</div></Row>
                </Col>
                <Col md='4' className="footer-text">
                    <h3 className="github-header">GitHub Repo:  <a className='github' href="https://github.com/PeteChicchetti/technigram" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a></h3>
                </Col>
            </Row>
        </div>
        </div>
    )
}

export default Footer;