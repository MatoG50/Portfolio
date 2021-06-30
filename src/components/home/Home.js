import './Home.css';
import image from './MGK-image.png';

const Home = () => {
  return (
    <div className='home'>
      <div className='info'>
        <h1>Martin Githinji</h1>
        <h2>Front-end Developer & UI/UX Designer</h2>
        <button className='hire-btn'>Hire Me</button>
      </div>

      <img className='mgk' src={image} alt='Martin'></img>
    </div>
  );
};

export default Home;
