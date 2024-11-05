import React from "react";
import {useState} from 'react';

function PlantCard({plants}) {

  const [inStock, setInStock] = useState(true);

  const handleStockToggle = () => {
    setInStock((prevInStock) => !prevInStock);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plants.image} alt={plants.name} />
      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>In Stock</button>
      ) : (
        <button onClick={handleStockToggle}>
          Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
