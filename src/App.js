import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
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
      <Navbar />
      <Welcome/>
      <Objective/>
      <Pricing />
      <Portfolio/>
      <Sayings/>
      <Footer/>
    </Router>
  );
}

export default App;
