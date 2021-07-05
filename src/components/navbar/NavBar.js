// import { Link } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='name'>
        <p>MGK</p>
      </div>
      <ul>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#portfolio-section'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
