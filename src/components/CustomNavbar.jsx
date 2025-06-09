import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // place your logo here

const CustomNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>
          <img
            src={logo}
            alt="Logo"
            width="180"
            height="35"
            className="d-inline-block align-top me-2"
          />
         
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-menu" />
        <Navbar.Collapse id="navbar-menu">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate('/join')}>Join Us</Nav.Link>
            <NavDropdown title="Language" id="language-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#english">English</NavDropdown.Item>
              <NavDropdown.Item href="#spanish">Spanish</NavDropdown.Item>
              <NavDropdown.Item href="#hindi">Hindi</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => navigate('/account')}>Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
