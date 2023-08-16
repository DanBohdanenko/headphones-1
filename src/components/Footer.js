import React from "react";
import mainLogo from "../img/desktop/icons/logo.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <img src={mainLogo} alt="" />
          <div className="footer__icons">
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebook className="footer__facebook  footer__icon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter className="footer__twitter footer__icon" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="footer__instagram footer__icon" />
            </a>
          </div>
        </div>
        <p>©headphones 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
