import React from "react";
import mainLogo from "../../assets/img/desktop/icons/logo.svg";
import Link from "../../common/Link";
import headerLinksData from "./data/headerLinksData";
import "./header.scss";

export const Header = () => {
  const [burgerActive, setBurgerActive] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  const onSetBurgerActive = () => {
    setBurgerActive((prev) => !prev);
  };
  const burgerClickHandler = () => {
    onSetBurgerActive();
    toggleBurger();
  };

  const closeBurger = () => {
    setIsOpen(false);
    onSetBurgerActive(false);
  };
  return (
    <header className="header">
      <nav className="header__navbar">
        <Link href="#hero">
          <img src={mainLogo} alt="logo" />
        </Link>
        <div
          className={burgerActive ? "burger active" : "burger"}
          onClick={() => burgerClickHandler()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
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
