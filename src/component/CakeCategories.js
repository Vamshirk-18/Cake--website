
import React from 'react';
import { Link } from 'react-router-dom'; 


const cakes = [
  { id: '1', name: 'Chocolate Lava Cake', image: 'https://www.bakingo.com/blog/wp-content/uploads/2024/06/Molten-Lava-Cake-1200x720.jpg' },
  { id: '2', name: 'Strawberry Cheesecake', image: 'https://static01.nyt.com/images/2024/07/29/multimedia/strawberry-cheesecake-cjbt/strawberry-cheesecake-cjbt-googleFourByThree.jpg' },
  { id: '3', name: 'Vanilla Bean Cake', image: 'https://i0.wp.com/bryonysbakes.com/wp-content/uploads/2022/05/15635F42-D478-4586-9F1D-0F479F38E2C3_1_105_c.jpg?ssl=1' },
  
];

const CakeCategories = () => {
  return (
    <div className="cake-categories-container">
      <h2>Our Cake Collection</h2>
      <div className="cake-list">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-item">
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <Link to={`/cake/${cake.id}`} className="cake-details-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeCategories;
