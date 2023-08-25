import React from "react";
import "./results.scss";
import resultsItemsDataList from "./ResultsItemsData";
import TitleComponent from "../typography/TitleComponent";
import TextComponent from "../typography/TextComponent";
import { titles, text } from "../typography/typographyData";

//"Results" component
const Results = () => {
  return (
    <section className="results" id="results">
      <div className="container">
        <div className="results__body">
          <TitleComponent
            className="results__title title"
            title={titles.results}
          />
          <TextComponent className="results__text text" text={text.results} />
        </div>
        <ul className="results__list">
          {resultsItemsDataList.map((item) => (
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
