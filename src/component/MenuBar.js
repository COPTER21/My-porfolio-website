import "../styles/MenuBar.css";
import userPic from "../assets/myPic.jpg";

const MenuBar = () => {
  return (
    <div className="menu-container">
      <header>
        <img src={userPic} alt="userImg" />
        <ul className="menu-bar">
          <li>
            <a href="https://www.w3schools.com/tags/tag_a.asp" target="_self">
              ABOUT
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/tags/tag_a.asp" target="_self">
              EXPERIENCE
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/tags/tag_a.asp" target="_self">
              EDUCATION
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/tags/tag_a.asp" target="_self">
              SKILLS
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default MenuBar;
