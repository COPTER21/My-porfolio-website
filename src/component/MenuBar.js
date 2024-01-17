import React from "react";
import "../styles/MenuBar.css";
import userPic from "../assets/myPic.jpg";
import Content from "./Content";
import { useState } from "react";
import arrowleft from "../assets/chevrons-left-regular-24.png";
import arrowright from "../assets/chevrons-right-regular-24.png";
import minimenu from "../assets/menu-regular-24.png";

const MenuBar = () => {
  const [isStyles, setIsStyles] = useState(false);
  const [isPhotoStyles, setIsPhotoStyles] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [tabActive, setTabActive] = useState("");
  const [miniMenu, setMiniMenu] = useState (false);

  // --------------function---------------------
  const toggleStyle = () => {
    setIsStyles(!isStyles);
  };
  const toggleStylePhoto = () => {
    setIsPhotoStyles(!isPhotoStyles);
  };
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  const dropDownChange = () => {
    return isDropdown ? arrowright : arrowleft;
  };
  const miniMenuToggle = () => {
    setMiniMenu(!miniMenu);
  }

  // ---------change style---------
  const photoStyles = {
    borderStyle: isPhotoStyles && "dashed inset dashed outset",
    borderColor: isPhotoStyles && "black",
  };
  const showMenu = {
    visibility: isDropdown && "hidden",
  };
  const showArrow = {
    visibility: "visible",
    left: isDropdown && "-20rem",
  };
  const showMiniMenu = {
    opacity: miniMenu && 1,
    height: miniMenu && 'fit-content',
  }

  return (
    <div className="menu-container">
      <header style={showMenu}>
        <div className="response">
          <img
            src={userPic}
            alt="userImg"
            onClick={toggleStylePhoto}
            style={photoStyles}
            className="myimg"
          />
          <div className="response-menu">
            <span className="response-text">My Portfolio Website</span>
            <img src={minimenu} alt="mini-menu" className="mini-icon" onClick={miniMenuToggle} />
          </div>
        </div>
        <ul className="menu-bar" style={showMiniMenu}>
          <li>
            <a
              href="#about"
              target="_self"
              className={tabActive === "about" ? "active" : ""}
              onClick={() => setTabActive("about")}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#exp"
              target="_self"
              className={tabActive === "exp" ? "active" : ""}
              onClick={() => setTabActive("exp")}
            >
              EXPERIENCE
            </a>
          </li>
          <li>
            <a
              href="#educate"
              target="_self"
              className={tabActive === "educate" ? "active" : ""}
              onClick={() => setTabActive("educate")}
            >
              EDUCATION
            </a>
          </li>
          <li>
            <a
              href="#skill"
              target="_self"
              className={tabActive === "skill" ? "active" : ""}
              onClick={() => setTabActive("skill")}
            >
              SKILLS
            </a>
          </li>
          <li
            onClick={toggleStyle}
            className={tabActive === "mode" ? "active" : ""}
          >
            <span>SET MODE</span>
          </li>
        </ul>
        <div className="arrowside" onClick={toggleDropdown} style={showArrow}>
          <img src={dropDownChange()} alt="arrow-left" />
          {/* <img src={arrowright} alt="arrow-right" /> */}
        </div>
      </header>
      <Content isStyles={isStyles} isDropdown={isDropdown} />
    </div>
  );
};

export default MenuBar;
