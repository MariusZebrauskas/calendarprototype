import React, { FC, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MoveWithRedux from './components/MoveWithRedux';
import gsap from 'gsap';
import Home from './pages/Home';
import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Calendar from "./components/calendar/Caledar"

const App: FC = () => {
  

  return (
    <div className='App'>
      <Link to='/'>
        <button>home</button>
      </Link>
      <Link to='/about'>
        <button>about</button>
      </Link>
      <Link to='/calendar'>
        <button>calendar</button>
      </Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='calendar' element={<Calendar />} />
      </Routes>
    </div>
  );
};

export default App;
