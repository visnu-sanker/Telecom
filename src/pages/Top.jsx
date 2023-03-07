import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

import NavDropdown from "react-bootstrap/NavDropdown";

const Top = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    sessionStorage.removeItem("jwt");
    navigate("/");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ marginLeft: "-60px" }} href="/">
            Telecom App
          </Navbar.Brand>
          <Nav className="me-auto">
            {sessionStorage.getItem("jwt") && (
              <Nav.Link href="/">Home</Nav.Link>
            )}
            <NavDropdown title="View Plans" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/mbview">Mobile</NavDropdown.Item>
              <NavDropdown.Item href="/brview">Broadband</NavDropdown.Item>
            </NavDropdown>
            {!sessionStorage.getItem("jwt") && (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
            {!sessionStorage.getItem("jwt") && (
              <Nav.Link href="/signup">Signup</Nav.Link>
            )}
            {sessionStorage.getItem("jwt") && (
              <Nav.Link onClick={handleClose}>Logout</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Top;
