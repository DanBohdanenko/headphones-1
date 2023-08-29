import React from "react";
import { Header } from "../Header";
import "./hero.scss";
import Typography from "../../common/Typography";
import heroInfo from "./data/heroInfo";

const Home = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <Header />
        <div className="hero__body">
          <Typography variant="h1" className="hero__title title">
            {heroInfo.title}
          </Typography>
          <Typography variant="h3" className="hero__subtitle">
            {heroInfo.subtitle}
          </Typography>
          <a href="#contact" className="hero__button button">
            Contact us
          </a>
          <Typography variant="p" className="hero__text text">
            {heroInfo.text}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Home;
