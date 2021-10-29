import React from "react";
import "./Header.scss";
import {
  logo
} from "../../DrChuck";

function Header() {


  return (
    <header className="header">
      <a href="/" className="logo">
        <span className="logo-name">
          <img src={logo.img} alt="Dr. Charles Severance" />
        </span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn" style={{color: "white"}}>
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="https://www.learnerprivacy.org/">Podcast</a>
        </li>

        <li>
          <a href="https://www.youtube.com/user/csev">Youtube</a>
        </li>

        <li>
          <a href="https://github.com/csev">Open Source</a>
        </li>

        {/* update it later */}

        <li>
          <a href="https://www.dr-chuck.com/csev-blog">Blogs</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
