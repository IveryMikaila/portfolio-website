import React from 'react';
import { Routes, useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './Styles/Index.css'
import { AnimatePresence } from "framer-motion";

//Components
import Navigation from './Components/Navbar';
import Home from './Components/Pages/Home';
import Work from './Components/Pages/Work';
import Contact from './Components/Pages/Contact';

function App() {
    const location = useLocation();
  return (
    <div className="App">
      <Navigation />
       <AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname} >
<Route element={<Home/>} path={'/'} />
<Route element={<Work/>} path={'/work'} />
<Route element={<Contact />} path={'/contact'} />
  </Routes>
  </AnimatePresence>
    </div>
  );
}

export default App;
