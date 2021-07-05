import './Home.css';
import image from './MGK-image.png';

const Home = () => {
  return (
    <div id='home'>
      <div className='info'>
        <h1>Martin Githinji</h1>
        <h2>Front-end Developer & UI/UX Designer</h2>
        <a href='#contact' className='hire-btn'>
          Hire Me
        </a>
      </div>

      <img className='mgk' src={image} alt='Martin'></img>
    </div>
  );
};

export default Home;
