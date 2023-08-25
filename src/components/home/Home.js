import React from "react";
import Header from "../header/Header";
import "./home.scss";
import { titles, subtitles, text } from "../typography/typographyData";
import TextComponent from "../typography/TextComponent";

//Home component - first component user will see

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <Header />
        <div className="home__body">
          <h1 className="home__title title">{titles.home}</h1>
          <h3 className="home__subtitle">{subtitles.home}</h3>
          <a href="#contact" className="home__button button">
            Contact us
          </a>
          <TextComponent className="home__text text" text={text.home} />
        </div>
      </div>
    </section>
  );
};

export default Home;
