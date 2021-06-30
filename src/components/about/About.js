import './About.css';
const About = () => {
  return (
    <div className='about'>
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
          <button className='port-btn'>View Portfolio</button>
          <button className='cv-btn'>Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
