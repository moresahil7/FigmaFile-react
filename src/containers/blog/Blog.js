import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const blogarticleData = [
  {
    ph: blog02,
    date: "03/01/2022",
    title:
      "React Js is the leading javascript library used for web development!",
  },
  {
    ph: blog03,
    date: "03/01/2022",
    title:
      "React Js is the leading javascript library used for web development!",
  },
  {
    ph: blog04,
    date: "03/01/2022",
    title:
      "React Js is the leading javascript library used for web development!",
  },
  {
    ph: blog05,
    date: "03/01/2022",
    title:
      "React Js is the leading javascript library used for web development!",
  },
];

const Blog = () => {
  return (
    <div className="gpt3_blog section_padding">
      <div className="gpt3_blog-heading">
        <h1 className="gradient_text">
          A lot is happening, We are blogging about the same.
        </h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container_groupA">
          <Article
            ph={blog01}
            date="03/01/2022"
            title="React Js is the leading javascript library used for web development!"
          />
        </div>
        <div className="gpt3_blog-container_groupB">
          {blogarticleData.map((item, index) => {
            return (
              <Article
                ph={item.ph}
                date={item.date}
                title={item.title}
                key={item.title + index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
