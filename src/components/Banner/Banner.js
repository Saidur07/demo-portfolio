import React from "react";
import "./Banner.css";
const Box = () => {
  return (
    <div className="Banner">
      <div className="banner-section">
        <div className="box">
          <div className="box1">
            <h2>1+</h2>
          </div>
          <br />
          <p>Years Experience</p>
        </div>
        <div className="box">
          <div className="box2">
            <h2>100%</h2>
          </div>
          <br />
          <p>Satisfaction</p>
        </div>
        <div className="box">
          <div className="box3">
            <h2>10+</h2>
          </div>
          <br />
          <p>Projects</p>
        </div>
        <div className="box">
          <div className="box4">
            <h2>20k+</h2>
          </div>
          <br />
          <p>Lines of Code</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
