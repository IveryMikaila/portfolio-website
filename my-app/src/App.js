import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

//Components
import Navigation from './Components/Navbar';
import Home from './Components/Pages/Home';
import Work from './Components/Pages/Work';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
  <Routes>
<Route element={<Home/>} path={'/'} />
<Route element={<Work/>} path={'/work'} />
<Route element={<Contact />} path={'/contact'} />
  </Routes>
    </div>
  );
}

export default App;
