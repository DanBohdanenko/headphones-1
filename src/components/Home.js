import React from "react";
import Header from "./Header";

//Home component - first component user will see

const Home = ({ burgerActive, onSetBurgerActive }) => {
  return (
    <section className="home" id="home">
      <div className="container">
        <Header
          burgerActive={burgerActive}
          onSetBurgerActive={onSetBurgerActive}
        />
        <div className="home__body">
          <h1 className="home__title title">
            Premium Headphones for True Music Lovers
          </h1>
          <h3 className="home__subtitle">
            Immerse Yourself in the Ultimate Audio Experience
          </h3>
          <a href="#contact" className="home__button button">
            Contact us
          </a>
          <p className="home__text text">
            Discover a wide range of premium headphones designed to deliver
            exceptional sound quality and comfort. Whether you're a music
            enthusiast or a professional audiophile, our headphones offer
            unparalleled audio fidelity, sleek design, and cutting-edge
            technology. Elevate your listening experience and indulge in the
            purest form of musical pleasure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
