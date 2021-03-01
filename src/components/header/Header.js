import React from 'react';
import "./Header.css";
import logo from "../../images/kkr-logo.png";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <img src={logo} alt="" />
                <Navbar.Brand href="/home">
                    Kolkata Knight Riders</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/news">HOME</Nav.Link>
                        <Nav.Link href="/news">NEWS</Nav.Link>
                        <Nav.Link href="/result">FIXTURES & RESULTS</Nav.Link>
                        <Nav.Link href="/players">PLAYERS</Nav.Link>
                        <Nav.Link href="/gallary">GALLERY</Nav.Link>

                    </Nav>
                    <Nav>
                        <p className="accountIcon"> <span id="login">Login Or Sign Up</span>  <FontAwesomeIcon icon={faUserCircle} /></p>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            

        </div>

    );
};

export default Header;