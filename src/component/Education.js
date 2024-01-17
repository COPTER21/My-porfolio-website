import React from "react";
import "../styles/Education.css";

const Education = () => {
  return (
    <div id='educate' className="educate-container">
      <h2>EDUCATION</h2>
      <div className="educate-item-container">
        <div className="educate-item">
          <div className="edu-up-item">
            <span className="institution">Khon Kaen University</span>
            <span className="graduate-period">Jul 2019 - May 2023</span>
          </div>
          <span className="educational-institution">Computer Engineering</span>
          <span className="gpa">GPA: 2.51</span>
        </div>
      </div>
      <div className="educate-item-container">
        <div className="educate-item">
          <div className="edu-up-item">
            <span className="institution">Khon Kaen Wittayayon School</span>
            <span className="graduate-period">Sep 2014 - May 2019</span>
          </div>
          <span className="educational-institution">
            High School - Senior High School
          </span>
          <span className="gpa">GPA: 3.49</span>
        </div>
      </div>
    </div>
  );
};

export default Education;
