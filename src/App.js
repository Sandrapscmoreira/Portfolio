import './App.css';
import SideNav from './components/SideNav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './content/About';
import Education from "./content/Education";
import Skills from './content/Skills';
import Contact from './content/Contact';
import ContactForm from './components/ContactForm';

function App() {
  return(
    <Router>
      <div className="App">
       <SideNav/>
       
       <Route exact path="/about">
        <About/>
       </Route>
       <Route exact path="/education">
        <Education/>
       </Route>
       <Route exact path="/skills">
         <Skills/>
       </Route>
       <Route exact path="/contact">
         <Contact/>
       </Route>

      
      </div>
    </Router>
      
    );
};

export default App;
