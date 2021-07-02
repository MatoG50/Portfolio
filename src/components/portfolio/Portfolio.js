import './Portfolio.css';
import lockOne from './portImages/lockstore-version-1.png';
import lockTwo from './portImages/lockstore-version-2.png';
import xdImg from './portImages/xd pc window.png';
import mobiImg1 from './portImages/mobile app.png';
import mobiImg2 from './portImages/Mob app A.png';
import mobiImg3 from './portImages/mob app b.png';
const Portfolio = () => {
  return (
    <div className='port-section'>
      <div className='skills-name'>
        <h1 className='section-title'>Portfolio</h1>
        <div className='underline-skills'></div>
      </div>
      <div className='container'>
        <div className='port-card'>
          <img
            className='port-image'
            src={lockOne}
            alt='Lockstore-version-1'
          ></img>
          <div className='description'>
            <h2>Lockstore - Version 1</h2>
            <p className='p-desc'>
              Lockstore is a web application connected to an <br />
              API that helps store owners manage employees,
              <br /> products and sales.
              <br /> Lockstore - version - 1 was built using JavaScript,
              <br /> HTML and CSS.
            </p>
            <div className='port-btns'>
              <button className='git-btn'>GitHub</button>
              <button className='web-btn'>Website</button>
            </div>
          </div>
        </div>
        <div className='port-card'>
          <img
            className='port-image'
            src={lockTwo}
            alt='Lockstore-version-1'
          ></img>
          <div className='description'>
            <h2>Lockstore - Version 2</h2>
            <p className='p-desc'>
              Lockstore- version 2 is an improvement to <br />
              Lockstore version 1. It was built using React and
              <br /> Redux for state management.
            </p>
            <div className='port-btns'>
              <button className='git-btn'>GitHub</button>
              <button className='web-btn'>Website</button>
            </div>
          </div>
        </div>
        <div className='port-card'>
          <img
            className='port-image'
            src={xdImg}
            alt='Lockstore-version-1'
          ></img>
          <div className='description'>
            <h2>UI/UX Website Design</h2>
            <p className='p-desc'>
              This is a UI design for a freelancing website
              <br /> where teachers can manage their courses. It
              <br /> was designed using Adobe XD.
            </p>
            <div className='port-btns'>
              <button className='web-btn'>Website</button>
            </div>
          </div>
        </div>
        <div className='port-card'>
          <div className='mobi-images-div'>
            <img src={mobiImg2} alt='mobi-1' className='mobi-img'></img>
            <img src={mobiImg3} alt='mobi-2' className='mobi-img'></img>
            <img src={mobiImg1} alt='mobi-3' className='mobi-img'></img>
          </div>

          <div className='description'>
            <h2>UI/UX Mobile App</h2>
            <p className='p-desc'>
              This is the mobile app for the freelancing
              <br /> website designed using Adobe XD.
            </p>
            <div className='port-btns'>
              <button className='web-btn'>Website</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
