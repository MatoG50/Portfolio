import { Link } from 'react-router-dom';
import './About.css';
const About = () => {
  return (
    <div id='about'>
      <div className='abt'>
        <h2>About Me</h2>
        <div className='underline'></div>
      </div>
      <div className='abt-msg'>
        <p>
          Hello. My name is <b>Martin Githinji Kung'u</b>. <br />
          I'm a Front-end Developer based in Nairobi, Kenya.
          <br /> I love solving problems through code and learning new skills.
          <br />I am passionate about great user experience and user interface
          design.
        </p>
        <div className='btns'>
          <a href='#portfolio-section' className='port-btn'>
            View Projects
          </a>
          <Link
            to={{
              pathname:
                'https://drive.google.com/file/d/1ry9CAFepV1VgtPc9k9CWEADlQa6CCUFJ/view?usp=sharing',
            }}
            target='_blank'
            className='cv-btn'
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
