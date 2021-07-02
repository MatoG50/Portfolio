import twitter from './icons/twitter.svg';
import linkedIn from './icons/linkedin.svg';
import './Contact.css';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className='contact'>
      <div className='skills-name'>
        <h1 className='section-title'>Contact</h1>
        <div className='underline-skills'></div>
      </div>
      <div className='contact-info'>
        <form>
          <input id='name-inp' type='text' placeholder='Name' />
          <input id='em-inp' type='email' placeholder='Email' />
          <br />
          <input id='mes-inp' placeholder='Your message...' type='text' />
          <br />
          <button className='send-btn'>Send</button>
        </form>
        <div className='my-info'>
          <h2 className='info-text'>Email</h2>
          <p className='info-det'>matog50@gmail.com</p>
          <h2 className='info-text'>Phone</h2>
          <p className='info-det'>+254-724-979-592</p>
          <h2 className='info-text'>Address</h2>
          <p className='info-det'>
            100907-00101
            <br />
            Nairobi, Kenya
          </p>

          <Link
            to={{ pathname: 'https://twitter.com/matogithinji' }}
            target='_blank'
          >
            <img id='twitter' src={twitter} alt='twitter'></img>
          </Link>
          <Link
            to={{ pathname: 'https://www.linkedin.com/in/martin-githinji-k/' }}
            target='_blank'
          >
            <img id='linkedIn' src={linkedIn} alt='linkedIn'></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
