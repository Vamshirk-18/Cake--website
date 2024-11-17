
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 


const cakesData = [
    {
      id: '1',
      name: 'Chocolate Lava Cake',
      description: 'Rich chocolate cake with a molten center.',
      price: 15.99,
      
      availableSizes: ['Small', 'Medium', 'Large']
    },
    {
      id: '2',
      name: 'Strawberry Cheesecake',
      description: 'Creamy cheesecake topped with fresh strawberries.',
      price: 18.99,
     
      availableSizes: ['Small', 'Medium', 'Large']
    },
   
    {
      id: '3',
      name: 'Vanilla Bean Cake',
      description: 'Delicate vanilla cake with vanilla bean frosting.',
      price: 12.99,
     
      availableSizes: ['Small', 'Medium', 'Large']
    },
    
  ];
  

const CakeDetails = () => {
  const { id } = useParams(); 
  const [cake, setCake] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Medium');

  
  useEffect(() => {
    const cakeDetails = cakesData.find(cake => cake.id === id);
    setCake(cakeDetails);
  }, [id]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${cake.name}(s) to cart`);
    
  };

  if (!cake) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="cake-details-container">
      <h2>{cake.name}</h2>
      <div className="cake-details">
       
        <div className="cake-info">
          <p><strong>Description:</strong> {cake.description}</p>
          <p><strong>Price:</strong> ${cake.price.toFixed(2)}</p>
          
          <div className="cake-sizes">
            <label htmlFor="size">Size:</label>
            <select
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {cake.availableSizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>

          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default CakeDetails;
