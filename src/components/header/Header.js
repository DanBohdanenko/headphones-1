import React from "react";
import mainLogo from "../../assets/img/desktop/icons/logo.svg";
import { Link, headerLinksData, Burger } from "../";
import "./header.scss";

export const Header = () => {
  const [burgerActive, setBurgerActive] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);
  const closeBurger = () => {
    setIsOpen(false);
    setBurgerActive(false);
  };
  return (
    <header className="header">
      <nav className="header__navbar">
        <Link href="#hero">
          <img src={mainLogo} alt="logo" />
        </Link>
        <Burger
          burgerActive={burgerActive}
          setBurgerActive={setBurgerActive}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <ul
          className={
            burgerActive ? "header__nav-list active" : "header__nav-list"
          }
        >
          {headerLinksData.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="header__nav-link"
                onClick={closeBurger}
              >
                {item.children}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
