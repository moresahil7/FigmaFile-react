import React from "react";
import "./trending.css";
import { Card } from "../../containers/import";

const Trending = () => {
  return (
    <div className="trending_container">
      <div className="trending_heading">
        <h1>Trending Institutes</h1>
        <p>View All</p>
      </div>
      <div className="trending_cards">
        <Card />
        <Card />
        <Card />
        <Card />
      
      </div>
    </div>
  );
};

export default Trending;
