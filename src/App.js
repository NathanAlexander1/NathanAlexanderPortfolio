import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <main>
    <NavBar/>
    <Router>
      <Routes>
        <Route path="/aboutMe" element={<AboutMe/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contactMe" element={<ContactMe/>}/>
      </Routes>
    </Router>
    </main>
  );
}

export default App;
