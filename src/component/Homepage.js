
import React from 'react';
import { Link } from 'react-router-dom'; 


const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <h1>Welcome to Sweet Treats Cake Shop!</h1>
       
        <p>Your go-to destination for delicious cakes for any occasion.</p>
      </div>
      <nav className="footer">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Cake Categories</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">AboutUs</Link></li>
          
        </ul>
      </nav>
      <h2>Featured Cakes</h2>
      <div className="featured-cakes">
       
        <div className="cake-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4VrZqU4D-mOxMPdyBaJLBmZEbpvtJFtdCQ&s" alt="Cake 1" />
          <h3>Chocolate Delight</h3>
          <p>$25</p>
        </div>
        <div className="cake-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQwX9qD3AlWks8ClzqTbexIoMd4Qd7OlLOw&s" alt="Cake 2" />
          <h3>Fruit Fantasy</h3>
          <p>$30</p>
        </div>
        <div className="cake-card">
          <img src="https://thescranline.com/wp-content/uploads/2023/06/RED-VELVET-CAKE-23-S-01.jpg" alt="Cake 2" />
          <h3>Red Velvet </h3>
          <p>$50</p>
        </div>
    
      </div>
    </div>
  );
};

export default Homepage;
