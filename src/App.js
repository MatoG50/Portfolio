import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/about/About';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';

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
      </div>
    </Router>
  );
}

export default App;
