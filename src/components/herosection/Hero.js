import React from "react";
import hero from "../../assets/hero.png";
import { HeroRight } from "../../containers/import";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero_container">
      <img src={hero} alt="" srcset="" />
      <div className="hero_container-left">
        <h2>Welcome to Edufu Lorem Ipsum and content !</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vitae
          eros aliquet congue.
        </p>
      </div>
      <div className="hero_container-right">
        <HeroRight />
      </div>
    </div>
  );
};

export default Hero;
