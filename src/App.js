import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer'

function App() {
  return (
    <main>
    <NavBar/>
    {/* <AboutMe/>
    <Portfolio/>
    <Resume/>
    <ContactMe/> */}
    <Router>
      <Routes>
        <Route path="/aboutMe" element={<AboutMe/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contactMe" element={<ContactMe/>}/>
      </Routes>
    </Router>
    <Footer/>
    </main>
  );
}

export default App;
