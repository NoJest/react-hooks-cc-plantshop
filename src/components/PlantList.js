import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants, setPlants, filteredPlants} ) {


  const mappedPlants = filteredPlants.map(plants => 
    <PlantCard 
    key={plants.id} 
    plants={plants}/>);

  return (
    <ul className="cards">{mappedPlants}</ul>
  );
}

export default PlantList;
