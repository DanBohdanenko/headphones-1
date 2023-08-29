import React from "react";
import aboutImages from "./data/aboutImages";
import "./about.scss";
import aboutInfo from "./data/aboutInfo";
import Typography from "../../common/Typography";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
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
      </div>
    </section>
  );
};

export default About;
