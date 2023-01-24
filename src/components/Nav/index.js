import { Link } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/logo.png";


const Navigation = () => {

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              className="logo"
              alt="Project Manager Tool"
            />
          </Navbar.Brand>

          <Nav className="mb-0 linksize">

          {/* {currentUser &&  <Nav.Link as={Link} to="/dashboard">
              Profile
            </Nav.Link>} */}


            <Nav.Link as={Link} to="/">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/design">
              Design
            </Nav.Link>
            <Nav.Link as={Link} to="/material">
              Material
            </Nav.Link>
            <Nav.Link as={Link} to="/labor">
              Labor
            </Nav.Link>
            <Nav.Link as={Link} to="/closeout">
              Closeout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
