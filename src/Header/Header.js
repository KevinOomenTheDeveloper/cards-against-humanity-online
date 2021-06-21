import "./Header.scss";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Conditional from "../Conditional/Conditional"
import { useKeycloak } from "@react-keycloak/web";

import React from "react";

const Header = ({ headerTitle}) => {

  const {keycloak} = useKeycloak();

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
          <Nav.Link as={Link} className="link" to="/logs">
              logs
            </Nav.Link>
            <Nav.Link as={Link} className="link" to="/">
              Home
            </Nav.Link>
            <Conditional display={keycloak.hasRealmRole('admin')}>
              <Nav.Link as={Link} className="link" to="/admin">
                admin
              </Nav.Link>
            </Conditional>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
