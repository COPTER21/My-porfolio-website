import "../styles/content.css";
import About from "./About";
import Experience from "./Experience";
import Education from './Education';
import Skill from "./Skill";


const Content = () => {
  return (
    <div className="content-container">
      <About />
      <Experience />
      <Education />
      <Skill />
    </div>
  );
};

export default Content;
