import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Offer from './components/Offer/Offer';
import Testimony from './components/Testimony/Testimony';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Offer />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;
