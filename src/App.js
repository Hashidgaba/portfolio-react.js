import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './index.css';


export default function App() {
  return (
    <div>
      <Header />
      <About message="SKILL" />
      <Services/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}


