import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'; // Import your Home page component


function App() {
  return (
    <BrowserRouter>
      <Navbar/> 
      <Routes> 
        <Route path="/" element={<Home />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
