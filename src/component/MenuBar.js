import "../styles/MenuBar.css";
import userPic from '../assets/myPic.jpg';

const MenuBar = () => {
  return (
    <div>
      <header>
        <img src={userPic} alt="userImg"/>
        <ul className="menu-bar">
          <li>ABOUT</li>
          <li>EXPERIENCE</li>
          <li>EDUCATION</li>
          <li>SKILLS</li>
        </ul>
      </header>
    </div>
  );
};

export default MenuBar;
