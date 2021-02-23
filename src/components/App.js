import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title/Title';
import POPOSList from './POPOSList/POPOSList';
import Footer from './Footer/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './About/About.js';
import POPOSDetails from './POPOSDetails/POPOSDetails.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList} />
        <Route path="/about" component={About} />
        <Route path ="/details/:id" component={POPOSDetails} />
        <Footer />
      </div>
    </Router>
  );
}
export default App;
