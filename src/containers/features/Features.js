import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

const featureData = [
  {
    title: "Web Applications Development",
    text: "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).",
  },
  {
    title: "Android Development",
    text: "Android software development is the process by which applications are created for devices running the Android operating system",
  },
  {
    title: "Machine Learning & Data Science",
    text: "ML is a type of AI that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so",
  },
  {
    title: "Flutter Development",
    text: "Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac.",
  },
];

const Features = () => {
  return (
    <div className="gpt3_features section_padding" id="features">
      <div className="gpt3_features-heading">
        <h1 className="gradient_text">
          “A designer knows he has achieved perfection not when there is nothing
          left to add, but when there is nothing left to take away”
        </h1>
        <p>-Antonie De-Saint Exupery</p>
      </div>
      <div className="gpt3_features-container">
        {featureData.map((item, index) => {
          return (
            <Feature
              title={item.title}
              text={item.text}
              key={item.title + index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
