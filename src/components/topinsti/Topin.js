import React from "react";
import "./Topin.css";
import { Card } from "../../containers/import";

const Topin = () => {
  return (
    <div className="top_container">
      <div className="top_heading">
        <h1>Top Institutes</h1>
        <p>View All</p>
      </div>
      <div className="top_cards">
        <Card />
        <Card />
        <Card />
        <Card />
      
      </div>
    </div>
  );
};

export default Topin;
