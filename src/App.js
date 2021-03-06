import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
function App() {
  return (
    <Router>
   <Navbar/>
  
          <Switch>
          <Container customClass="minHeight">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
              </Route>
        <Route path="/company">
              <Company />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/newproject">
              <NewProject />
            </Route>
            </Container>
          </Switch>
         
<Footer/>
    </Router>
    
  );
}

export default App;
