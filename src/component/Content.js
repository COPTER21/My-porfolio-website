import React from "react";
import "../styles/content.css";
import About from "./About";
import Experience from "./Experience";
import Education from './Education';
import Skill from "./Skill";



const Content = ({isStyles, isDropdown}) => {
  const style = {
    backgroundColor: isStyles? 'rgb(90, 88, 88)' : 'white',
    padding: isDropdown && '0 10rem 0 10rem',
  };
  return (
    <div className="content-container" style={style}>
      <About />
      <Experience />
      <Education  />
      <Skill  />
    </div>
  );
};

export default Content;
