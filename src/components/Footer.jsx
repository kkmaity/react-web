import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} sm={12} className="mb-3">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Terms & Conditions</a></li>
            </ul>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <h5>Social</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">LinkedIn</a></li>
              <li><a href="#" className="footer-link">YouTube</a></li>
              <li><a href="#" className="footer-link">Facebook</a></li>
              <li><a href="#" className="footer-link">Twitter</a></li>
            </ul>
          </Col>
          <Col md={4} sm={12}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>123 Main Street, New York, NY</li>
              <li>Email: support@example.com</li>
              <li>Phone: +1 (123) 456-7890</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
