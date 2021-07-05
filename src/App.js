import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
