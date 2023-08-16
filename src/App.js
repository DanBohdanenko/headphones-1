import React from "react";
import "./css/main.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Home from "./components/Home";

function App() {
  //Burger menu function
  const [burgerActive, setBurgerActive] = React.useState(false);
  const onSetBurgerActive = () => {
    setBurgerActive((prev) => !prev);
  };
  return (
    <div>
      <Home burgerActive={burgerActive} onSetBurgerActive={onSetBurgerActive} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
