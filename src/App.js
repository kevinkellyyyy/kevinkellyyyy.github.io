import React from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Resume from './components/Resume.js';
import Portfolio from './components/Portfolio.js';
import Favquotes from  './components/Favquotes.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import resumeData from './resumeData.js';
import portfolioData from './portfolioData.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Resume propsResumeData={resumeData}/>
      <Portfolio propsPortfolioData={portfolioData}/>
      <Favquotes/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
