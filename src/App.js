import React from 'react';
import Header from './components/header'
import Instructions from './components/instructions';
import Converter from './components/converter';
import Footer from './components/footer';
//import './App.css';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <Instructions />
        <Converter />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
