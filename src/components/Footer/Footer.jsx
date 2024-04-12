import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerMain__container">
      <div className="footer__container">
        <div className="footer__companyName footer__item">
          <div className="footer__title">
            <h4>BB</h4>
          </div>
          <div className="footer__details">
            <ul>
              <li>
                <Link to="/"></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__productLinks footer__item">
          <div className="footer__title">
            <Link to="/">
              <h4>Books</h4>
            </Link>
          </div>
          <div className="footer__details">
            <ul>
              <li>
                <Link className="routeLinks" to="/english">English Books</Link>
              </li>
              <li>
                <Link className="routeLinks" to="/hindi">Hindi Books</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__navLinks footer__item">
          <div className="footer__title">
            <Link to="/">
              <h4>Useful Links</h4>
            </Link>
          </div>
          <div className="footer__details">
            <ul>
              <li>
                <Link className="routeLinks" to="/">Home</Link>
              </li>
              <li>
                <Link className="routeLinks" to="/shop">Shop</Link>
              </li>
              <li>
                <Link className="routeLinks" to="/login">Log In</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__contact footer__item">
          <div className="footer__title">
            <Link to="contact">
              <h4>Contact</h4>
            </Link>
          </div>
          <div className="footer__details">
            <ul>
              <li>Hyderabad</li>
              <li>Telangana, India, 500010</li>
              <li>Ph: xxxxxxxxxx</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>©2024 Copyright | www.bb.com</p>
      </div>
    </div>
  );
}

export default Footer;
