import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-area mt-auto">
      <div className="footer-top">
        <Container className="footer-container">
          <Row className='footer-row'>
            <Col lg="3" md="6" className='group-1'>
              <div className="f-widget group-widget">
                <h3 className="f-title">
                  Get in Touch
                </h3>
                <p>Signup to know when the magic happens.</p>
                <form className="f-subscribe">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </form>
              </div>
              <div className="f-social-icon">
                <FacebookIcon className="mui-icon" />
                <TwitterIcon className="mui-icon" />
                <InstagramIcon className="mui-icon" />
                <LinkedInIcon className="mui-icon" />
              </div>
            </Col>

            <Col lg="3" md="2" className='group-2'>
              <div className="f-widget about-widget">
                <h3 className="f-title">Company</h3>
                <ul className="f-list">
                  <li>About Us</li>
                  <li>FAQs</li>
                  <li>Careers</li>
                </ul>
              </div>
            </Col>
            <Col lg="3" md="2" className='group-2'>
              <div className="f-widget about-widget">
                <h3 className="f-title">Help</h3>
                <ul className="f-list">
                  <li>Shipping</li>
                  <li>Return</li>
                  <li>Contact</li>
                </ul>
              </div>
            </Col>
            <Col lg="2" md="2" className='group-2'>
              <div className="f-widget about-widget">
                <h3 className="f-title">Account</h3>
                <ul className="f-list">
                  <li>My Account</li>
                  <li>Track Order</li>
                  <li>Discount</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
