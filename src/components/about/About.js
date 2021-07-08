import './About.css';
import resume from './resume/MARTIN_GITHINJI.pdf';
const About = () => {
  return (
    <div id='about'>
      <div className='about-container'>
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
            <a
              href={resume}
              download='Martin_Githinji_Resume.pdf'
              className='cv-btn'
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
