
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <header className="header">
    <h1>Cake Shop</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cakes">Cakes</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About US</Link>
    </nav>
  </header>
);

export default Header;