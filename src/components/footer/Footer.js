import React from "react";
import mainLogo from "../../assets/img/desktop/icons/logo.svg";
import "./footer.scss";
import { Link, Typography, Section, footerLinksData } from "../";

export const Footer = () => {
  return (
    <Section className="footer" variant="footer">
      <div className="footer__body">
        <Link href="#hero">
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
      <Typography variant="p">©headphones 2020</Typography>
    </Section>
  );
};
