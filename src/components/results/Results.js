import React from "react";
import "./results.scss";
import resultsInfo from "./data/resultsInfo";
import Typography from "../../common/Typography";

const Results = () => {
  return (
    <section className="results" id="results">
      <div className="container">
        <div className="results__body">
          <Typography variant="h2" className="results__title title">
            {resultsInfo.title}
          </Typography>
          <Typography variant="p" className="results__text text">
            {resultsInfo.text}
          </Typography>
        </div>
        <ul className="results__list">
          {resultsInfo.items.map((item) => (
            <li key={item.id} className="results__item">
              <Typography variant="h5" className="results__item-title">
                {item.title}
              </Typography>
              <Typography variant="p" className="results__item-text">
                {item.text}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Results;
