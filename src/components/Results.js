import React from "react";

const Results = ({ words }) => {
  return (
    <div className="results__items">
      <h1 className="results__item">{words[0].word}</h1>
    </div>
  );
};

export default Results;
