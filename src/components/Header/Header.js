import React from "react";
import "./Header.css";
import cover from "../../assets/images/cover.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="texts">
        <div className="text">
          <h2 className="text-intro">Hey! I am</h2>
          <h1 className="text-name">Saidur Rahman</h1> <br />
          <p className="text-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            asperiores quo quidem dolorem deserunt quia consequuntur distinctio,
            praesentium fuga assumenda odit quisquam. Nesciunt minima accusamus
            cupiditate reprehenderit, alias eaque natus.
          </p>
          <br />
          <button className="button extra-btn">
            <span>
              <a href="#">Know more</a>
            </span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <div className="images">
        <img src={cover} alt="" />
      </div>
    </div>
  );
};

export default Header;
