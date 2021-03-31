import React from 'react';
import "./Footer.scss"
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <div  bg="dark" className="Footer">
            <Container>
                <div className="footer-container">
                    <span className="footer-text">
                        @KevinOomen
                    </span>
                </div>
            </Container>
        </div>
    );
};

export default Footer;