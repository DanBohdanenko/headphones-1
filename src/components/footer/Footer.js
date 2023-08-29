import React from "react";
import mainLogo from "../../assets/img/desktop/icons/logo.svg";
import "./footer.scss";
import Link from "../../common/Link";
import footerLinksData from "./data/footerLinksData";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <Link href="#home">
            <img src={mainLogo} alt="logo" />
          </Link>
          <ul className="footer__icons">
            {footerLinksData.map((item) => {
              const Icon = item.img;
              return (
                <li key={item.platform}>
                  <Link href={item.url} target="_blank" rel="noreferrer">
                    <Icon className={`footer__icon footer__${item.platform}`} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <p>©headphones 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
