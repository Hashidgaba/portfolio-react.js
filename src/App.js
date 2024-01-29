import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './index.css'
function App() {

  return (
    <>
    
      <Header />
      <About message ="My Skill'S" />
      <Services/>
      <Contact/>
      <Footer/>
    </>

  );
}
export default App;

