import React from "react";
import "./featured.css";
import { BsArrowRight } from "react-icons/bs";
import { Feature } from "../../containers/import";

const Featured = () => {
  return (
    <div className="feature_container">
      <div className="feature_heading">
        <h1>Featured Institutes</h1>
        <p>
          View All
          <BsArrowRight />
        </p>
      </div>
      <div className="feature_cards">
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default Featured;
