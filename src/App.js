import React from 'react';
import Header from './components/header'
import Instructions from './components/coin2coinConverter/instructions';
import Converter from './components/coin2coinConverter/converter';
import Footer from './components/footer';

function App() {
  return (
    <div className='app-container'>
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
