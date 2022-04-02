import React from "react";
import "./nearby.css";
import { Card } from "../../containers/import";

const Nearby = () => {
  return (
    <div className="nearby_container">
      <div className="nearby_heading">
        <h1>Nearby Institutes</h1>
        <p>View All</p>
      </div>
      <div className="nearby_cards">
        <Card />
        <Card />
        <Card />
        <Card />
      
      </div>
    </div>
  );
};

export default Nearby;
