import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Header from './Header'
import Home from "./Home"
import Flavors from "./Flavors"
import Contact from "./Contact"
import Footer from "./Footer"
import '../App.css';
 
function App(props) {
  return (
    <Router>
    <div className="App">
      <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/flavors" component={Flavors}/>
        <Route path="/contact-us" component={Contact}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
