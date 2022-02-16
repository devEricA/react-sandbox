/*
    This page serves as the router controller
*/

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import LatestNews from './pages/latestNews';
import SignUp from './pages/signup';

//Routes for Home, about, latest news, and sign up pages are defined here. 
function App() {
  return(
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' exact element={<Home />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/latestNews' element={<LatestNews />}/>
      <Route path='/signUp' element={<SignUp />}/>
    </Routes>
    </Router>
  );
}

export default App;
