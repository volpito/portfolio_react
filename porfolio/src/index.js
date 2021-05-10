import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import Works from './Pages/Works';
import Exercices from './Pages/Works/Exercices';
import CaseStudy from './Pages/Works/CaseStudy';
import ConcretCase from './Pages/Works/ConcreteCase';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />

              <Route path="/Works/Exercices" exact>
                  <Exercices />
                </Route>
                <Route path="/Works/CaseStudy" exact>
                  <CaseStudy />
                </Route>
                <Route path="/Works/ConcretCase" exact>
                  <ConcretCase />
                </Route>

          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
