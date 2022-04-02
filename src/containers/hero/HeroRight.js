import React from "react";
import "./heroright.css";
import hero from "../../assets/hero.png"
import { BsArrowRight } from "react-icons/bs";



const data = [
  {
    image: hero,
    title: "Come to class with me!",
    desc: "Delhi International University",
  },
  {
    image: hero,
    title: "Come to class with me!",
    desc: "Delhi International University",
  },
  {
    image: hero,
    title: "Come to class with me!",
    desc: "Delhi International University",
  },
  {
    image: hero,
    title: "Come to class with me!",
    desc: "Delhi International University",
  },
  {
    image: hero,
    title: "Come to class with me!",
    desc: "Delhi International University",
  },
];

const HeroRight = () => {
 
  return (
    <div className="heroright_container">
      <div className="heroright_heading">
        <h2>Virtual Tour</h2>
        <h4>View All</h4>
        <BsArrowRight/>
      </div>
{
  data.map((item,index)=>{
    return(
      <div className="heroright_content" key={index} >
      <div className="image">
        <img src={item.image} alt="ll" />
      </div>
      <div className="content">
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        </div>
      </div>
    )
  })
}
      </div>
  )
};

export default HeroRight;
