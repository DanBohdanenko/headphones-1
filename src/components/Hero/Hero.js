import React from "react";
import "./hero.scss";
import { Section, Typography, Link, Header, heroInfo } from "../";

export const Hero = () => {
  return (
    <Section id="hero" className="hero" variant="section">
      <Header />
      <div className="hero__body">
        <Typography variant="h1" className="hero__title title">
          {heroInfo.title}
        </Typography>
        <Typography variant="h3" className="hero__subtitle">
          {heroInfo.subtitle}
        </Typography>
        <Link href="#contact" className="hero__button button">
          {heroInfo.button}
        </Link>
        <Typography variant="p" className="hero__text text">
          {heroInfo.text}
        </Typography>
      </div>
    </Section>
  );
};
