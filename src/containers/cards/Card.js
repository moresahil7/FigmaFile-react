import React from "react";
import cr from "../../assets/cr.png"
import "./card.css";
import { BsStar } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";



const Card = () => {
  return (
    <div className="card_container">
      <div className="card_image">
        <img src={cr} alt="" />
        <h3>Featured</h3>
        <h4>4.0 <BsStar/></h4>
        <h2>College Name</h2>
        <h6>College Location</h6>
        <img className="image2" src={cr} alt="" />
      </div>
      <div className="card_details">

        <div className="card_info">
          <div className="card_fee">
            <h5>Average Yearly Fee</h5>
            <h3>₹ 8k-72k</h3>
          </div>
          <div className="vert_line"></div>
          <div className="card_courses">
            <h5>Availabke Courses</h5>
            <h3>30 Courses</h3>
          </div>
          <div className="vert_line"></div>
          <div className="card_rank">
            <h5>Rank</h5>
            <h3>30</h3>
          </div>
        </div>
        <div className="hr_line"></div>
        <div className="card_buttons">
          <button><span><HiDownload/>Brochure</span></button>
          <button><span>Apply</span></button>
        </div>
      </div>

    </div>
  );
};

export default Card;
