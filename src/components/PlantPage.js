import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import {useState} from 'react'

function PlantPage( {plants, setPlants} ) {

  const [searchPlants, setSearchPlants] = useState("");
  const filteredPlants = plants.filter(plants =>
     plants.name.toLowerCase().startsWith(searchPlants.toLowerCase()));

  return (
    <>
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search setSearchPlants={setSearchPlants}/>
      <PlantList plants={plants} setPlants={setPlants} filteredPlants={filteredPlants} />
    </main>
    </>
  );
}

export default PlantPage;
