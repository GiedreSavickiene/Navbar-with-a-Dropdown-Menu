import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Autumn from './pages/Autumn';
import Cristmas from './pages/Cristmas';
import Forest from './pages/Forest';
import Home from './pages/Home';
import Mountains from './pages/Mountains';
import SnowMan from './pages/SnowMan';
import Spring from './pages/Spring';
import Winter from './pages/Winter';
import SingUp from './pages/SingUp';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/winter' element={<Winter />}></Route>
          <Route path='/mountains' element={<Mountains />}></Route>
          <Route path='/forest' element={<Forest />}></Route>
          <Route path='/snowman' element={<SnowMan />}></Route>
          <Route path='/christmas' element={<Cristmas />}></Route>
          <Route path='/spring' element={<Spring />}></Route>
          <Route path='/autumn' element={<Autumn />}></Route>
          <Route path='/singup' element={<SingUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
