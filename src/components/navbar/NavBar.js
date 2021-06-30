import { NavLink } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='name'>
        <p>MGK</p>
      </div>
      <ul>
        <li>
          <NavLink activeClassName='active-nav' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-nav' to='/about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-nav' to='/skills'>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-nav' to='/portfolio'>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-nav' to='/contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
