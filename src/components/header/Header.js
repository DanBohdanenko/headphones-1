import React from "react";
import mainLogo from "../../assets/img/desktop/icons/logo.svg";

const Header = () => {
  //Burger menu activity state
  const [burgerActive, setBurgerActive] = React.useState(false);
  //function that monitors and changes the state of the burger
  const [isOpen, setIsOpen] = React.useState(true);
  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };
  //burger menu function
  const onSetBurgerActive = () => {
    setBurgerActive((prev) => !prev);
  };
  const burgerClickHandler = () => {
    onSetBurgerActive();
    toggleBurger();
  };
  //closing burger function by click on a link
  const closeBurger = () => {
    setIsOpen(false);
    onSetBurgerActive(false);
  };
  return (
    <header>
      <nav className="home__navbar">
        <a href="#home">
          <img className="home__logo" src={mainLogo} alt="logo" />
        </a>
        <div
          className={burgerActive ? "burger active" : "burger"}
          onClick={() => burgerClickHandler()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          className={burgerActive ? "home__nav-list active" : "home__nav-list"}
        >
          <li>
            <a className="home__nav-link" href="#about" onClick={closeBurger}>
              About us
            </a>
          </li>
          <li>
            <a className="home__nav-link" href="#results" onClick={closeBurger}>
              Our results
            </a>
          </li>
          <li>
            <a className="home__nav-link" href="#contact" onClick={closeBurger}>
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
