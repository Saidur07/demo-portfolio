import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>Saidur</h2>
      </div>

      <div className="links">
        <ul className={`${open ? "opened" : "closed"}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="menuIcon" onClick={() => setOpen(!open)}>
          {open ? <XIcon></XIcon> : <MenuAlt1Icon></MenuAlt1Icon>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
