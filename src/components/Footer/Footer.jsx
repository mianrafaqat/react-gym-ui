import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import intsa from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="footer" />
          <img src={intsa} alt="footer" />
          <img src={linkedIn} alt="footer" />
        </div>

        <div className="logo-f">
          <img src={logo} alt="f-logo" />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
