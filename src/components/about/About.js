import React from "react";
import "./about.scss";
import { Typography, Section, aboutImages, aboutInfo } from "../";

export const About = () => {
  return (
    <Section className="about" id="about" variant="section">
      <div className="about__body">
        <Typography variant="h2" className="about__title title">
          {aboutInfo.title}
        </Typography>
        <Typography variant="p" className="about__text text">
          {aboutInfo.text}
        </Typography>
      </div>
      <ul className="about__items">
        {aboutInfo.items.map((item) => (
          <li key={item.id} className="about__item">
            <div className="about__item-img">
              <img src={aboutImages[item.src]} alt="about-image" />
            </div>
            <Typography variant="h3" className="about__item-title">
              {item.title}
            </Typography>
            <Typography variant="p" className="about__item-text">
              {item.description}
            </Typography>
          </li>
        ))}
      </ul>
    </Section>
  );
};
