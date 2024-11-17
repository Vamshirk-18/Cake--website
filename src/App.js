
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import CakeCategories from './component/CakeCategories';
import CakeDetails from './component/CakeDetails';
import Cart from './component/Cart';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Header from './component/Header'


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<CakeCategories />} />
        <Route path="/cake/:id" element={<CakeDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/header" element={<Header/>} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
