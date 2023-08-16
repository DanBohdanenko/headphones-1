import React from "react";
import images from "../images";

//"About component"
const About = () => {
  //array of objects with data of "About" component cards
  const itemsList = [
    {
      id: 1,
      src: "image1",
      title: "Sound Ecstasy",
      description: "Immerse yourself in a world of sound bliss.",
    },
    {
      id: 2,
      src: "image2",
      title: "Cinematic Sensitivity",
      description: "Experience every nuance of your favorite movies and shows.",
    },
    {
      id: 3,
      src: "image3",
      title: "Musical Inspiration",
      description:
        "Get inspired by crystal-clear audio for your creative pursuits.",
    },
    {
      id: 4,
      src: "image4",
      title: "The Perfect Blend",
      description: "Discover the perfect balance of style and performance.",
    },
  ];
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__body">
          <h2 className="about__title title">About us</h2>
          <p className="about__text text">
            We are dedicated to providing the ultimate audio experience for true
            music lovers. Our handpicked collection of high-quality headphones
            offers unparalleled sound clarity, immersive soundstages, and
            precise audio reproduction. With sleek designs and advanced
            features, our headphones are crafted to deliver exceptional comfort,
            durability, and style. Whether you're a music enthusiast,
            professional artist, or audiophile, our headphones will transport
            you to a world of pure sonic bliss. Elevate your music journey with
            us.
          </p>
        </div>
        <ul className="about__items">
          {itemsList.map((item) => (
            <li key={item.id} className="about__item">
              <div className="about__item-img">
                <img src={images[item.src]} alt="" />
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
