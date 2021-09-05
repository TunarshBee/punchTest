import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Welcome from './components/Navbar/Welcome';
import Objective from './components/Navbar/Objective'
import Portfolio from './components/Navbar/Portfolio';
import Pricing from './components/Navbar/Pricing';
import Sayings from './components/Navbar/Sayings';
import Footer from './components/Navbar/Footer';

function App() {


  return (
    <Router>
 
      <div className='mediaScreen'>
      
        <Welcome />
        <Objective />
        <Pricing />
        <Portfolio />
        <Sayings />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
