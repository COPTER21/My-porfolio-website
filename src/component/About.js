import "../styles/About.css";
import facebook from '../assets/facebook-circle-logo-24.png'
import twit from '../assets/twitter-logo-24.png'
// import linkin from '../assets/linkedin-logo-24.png'
import github from '../assets/github-logo-24.png'

const About = () => {
  return (
    <div className="about-section">
      <h1>
        KANT <span>SAIBEAUTONG</span>
      </h1>
      <p className="communicate-address">
        171/281 chataphadung 16,Nhaimuang,Muang Khon Kaen,Khon Kaen &#x2022;
        0845-15-1177 &#x2022; kantsaiWK@gmail.com
      </p>
      <p className="explain-myself">
        My name is Kant Saibeautong. I am interested in applying for a Front-end
        Developer position. I have some basic skill in Front-end Development. I
        am lacking of work experience and I am Ready to learn new things that
        will be gained through work. If you have any questions, please contact
        me on my phone or email address.
      </p>
      <div className="social-call">
        <img src={facebook} alt="social1" />
        <img src={twit} alt="social2" />
        <img src={github} alt="social3" />
      </div>
    </div>
  );
};

export default About;
