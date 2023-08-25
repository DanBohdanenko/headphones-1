import React from "react";
import images from "./images";
import "./about.scss";
import aboutItemsDataList from "./AboutItemsData";
import TitleComponent from "../typography/TitleComponent";
import TextComponent from "../typography/TextComponent";
import { titles, text } from "../typography/typographyData";

//"About component"
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__body">
          <TitleComponent className="about__title title" title={titles.about} />
          <TextComponent className="about__text text" text={text.about} />
        </div>
        <ul className="about__items">
          {aboutItemsDataList.map((item) => (
            <li key={item.id} className="about__item">
              <div className="about__item-img">
                <img src={images[item.src]} alt="about-image" />
              </div>
              <h3 className="about__item-title">{item.title}</h3>
              <p className="about__item-text">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
