import jsImg from './cards/Group 11.jpg';
import reactImg from './cards/Group 12.jpg';
import reduxImg from './cards/Group 14.jpg';
import adobeImg from './cards/Group 13.jpg';
import gitImg from './cards/Group 15.jpg';
import htmlImg from './cards/Group 9.jpg';
import cssImg from './cards/Group 10.jpg';
import './Skills.css';
const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills-name'>
        <h1 className='section-title'>Skills</h1>
        <div className='underline-skills'></div>
      </div>
      <div className='cards'>
        <img src={jsImg} alt='javaScript'></img>
        <img src={reactImg} alt='react'></img>
        <img src={reduxImg} alt='redux'></img>
        <img src={adobeImg} alt='adobeXD'></img>
        <img src={gitImg} alt='git'></img>
        <img src={htmlImg} alt='html'></img>
        <img src={cssImg} alt='css'></img>
      </div>
    </div>
  );
};

export default Skills;
