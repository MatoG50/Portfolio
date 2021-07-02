import { BrowserRouter as Router, Route } from 'react-router-dom';
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

        <Route exact path='/'>
          <Home />
        </Route>
        <Route>
          <About />
        </Route>
        <Route>
          <Skills />
        </Route>
        <Route>
          <Portfolio />
        </Route>
        <Route>
          <Contact />
        </Route>
        <Route>
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
