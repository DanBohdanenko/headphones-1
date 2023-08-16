import React from "react";

//"Results" component
const Results = () => {
  //array of objects with data of 'Results' component
  const resultList = [
    {
      id: 1,
      title: "+95%",
      text: "Customer Satisfaction",
    },
    {
      id: 2,
      title: "+80%",
      text: "Revenue Growth",
    },
    {
      id: 3,
      title: "+70%",
      text: "Market Share Expansion",
    },
    {
      id: 4,
      title: "+90%",
      text: "Return on Investment",
    },
  ];
  return (
    <section className="results" id="results">
      <div className="container">
        <div className="results__body">
          <h3 className="results__title title">
            Our results speak for themselves
          </h3>
          <p className="results__text text">
            Our results speak for themselves. With a proven track record of
            success, we have consistently delivered outstanding outcomes for our
            clients. Through our expertise, dedication, and innovative approach,
            we have achieved remarkable results that have surpassed
            expectations. From increased sales and revenue growth to improved
            customer satisfaction and brand recognition, our solutions have made
            a tangible impact. Trust us to deliver the exceptional results you
            need to thrive in today's competitive market.
          </p>
        </div>
        <ul className="results__list">
          {resultList.map((item) => (
            <li key={item.id} className="results__item">
              <h5 className="results__item-title">{item.title}</h5>
              <p className="results__item-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Results;
