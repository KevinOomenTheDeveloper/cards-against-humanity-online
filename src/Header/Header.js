import "./Header.scss";
import { Row, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import React from "react";

const Header = ({ headerTitle }) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Link to="/">
          <Navbar.Brand id="HeaderTitle">
            {" "}
            {headerTitle}
            {" "}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link className="link" to="/createfood">
                
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/checkout">
                
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/categories">
                
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
