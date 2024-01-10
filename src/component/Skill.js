import '../styles/Skill.css'
import html from '../assets/html5-logo-24.png';
import css from '../assets/css3-logo-24.png';
import js from '../assets/javascript-logo-24.png';
import reactLogo from '../assets//react-logo-24.png';
import git from '../assets/git-logo-24.png';
import github from '../assets/github-logo-24.png';

const Skill = () => {
  return (
    <div className='skill-container'>
      <h2>SKILLS</h2>
      <img src={html} alt='html' />
      <img src={css} alt='css' />
      <img src={js} alt='js' />
      <img src={reactLogo} alt='react' />
      <img src={git} alt='git' />
      <img src={github} alt='github' />
    </div>
  );
};

export default Skill;