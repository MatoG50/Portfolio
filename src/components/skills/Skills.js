import jsImg from './cards/javascript.png';
import reactImg from './cards/react.png';
import reduxImg from './cards/redux.png';
import adobeImg from './cards/xd.png';
import gitImg from './cards/git.png';
import htmlImg from './cards/html.png';
import cssImg from './cards/css.png';
import './Skills.css';
const Skills = () => {
  return (
    <div id='skills'>
      <div className='skills-name'>
        <h1 className='section-title'>Skills</h1>
        <div className='underline-skills'></div>
      </div>
      <div className='cards'>
        <div className='card'>
          <img className='card-img' src={jsImg} alt='javaScript'></img>
          <p>JavaScript</p>
        </div>
        <div className='card'>
          <img className='card-img' src={reactImg} alt='react'></img>
          <p>React</p>
        </div>
        <div className='card'>
          <img className='card-img' src={reduxImg} alt='redux'></img>
          <p>Redux</p>
        </div>
        <div className='card'>
          <img className='card-img' src={adobeImg} alt='adobeXD'></img>
          <p>Adobe XD</p>
        </div>
        <div className='card'>
          <img className='card-img' src={gitImg} alt='git'></img>
          <p>Git & Githhub</p>
        </div>
        <div className='card'>
          <img className='card-img' src={htmlImg} alt='html'></img>
          <p>HTML</p>
        </div>
        <div className='card'>
          <img className='card-img' src={cssImg} alt='css'></img>
          <p>CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
