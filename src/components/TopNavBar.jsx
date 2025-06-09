import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./TopNavBar.css";

const TopNavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="top-navbar">
        <Container fluid>
          <Nav className="me-auto top-nav-links">
            <div className="nav-item-with-sub">
              <Nav.Link href="#">LEARN<br /><small>Awareness is assurance</small></Nav.Link>
              <div className="sub-menu">
                <Nav.Link href="#">Articles</Nav.Link>
                <Nav.Link href="#">FAQs</Nav.Link>
              </div>
            </div>

            <div className="nav-item-with-sub">
              <Nav.Link href="#">PRODUCTS<br /><small>Plans to Manage Your Needs</small></Nav.Link>
              <div className="sub-menu">
                <Nav.Link href="#">Individual Life Insurance Plans</Nav.Link>
                <Nav.Link href="#">Group Insurance Plans</Nav.Link>
              </div>
            </div>

            <div className="nav-item-with-sub">
              <Nav.Link href="#">SERVICES<br /><small>For Existing Customers</small></Nav.Link>
              <div className="sub-menu">
                <Nav.Link href="#">Tools & Calculators</Nav.Link>
                <Nav.Link href="#">Premium Payment</Nav.Link>
              </div>
            </div>

            <div className="nav-item-with-sub">
              <Nav.Link href="#">ABOUT<br /><small>SBI Life</small></Nav.Link>
              <div className="sub-menu">
                <Nav.Link href="#">Our Team</Nav.Link>
                <Nav.Link href="#">Vision & Mission</Nav.Link>
              </div>
            </div>

            <div className="nav-item-with-sub">
              <Nav.Link href="#">CONTACT US<br /><small>For Your Needs</small></Nav.Link>
              <div className="sub-menu">
                <Nav.Link href="#">Customer Support</Nav.Link>
                <Nav.Link href="#">Branch Locator</Nav.Link>
              </div>
            </div>

            <Nav.Link className="online-plans" href="#">
              Online Plans <span role="img" aria-label="world">🌐</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavBar;
