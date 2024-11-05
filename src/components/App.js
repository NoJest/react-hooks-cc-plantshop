import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import {useState, useEffect} from 'react'
function App() {

  const[plants, setPlants] = useState([]);
  const [isLoading, setLoading] = useState (true);

  async function getPlants() {
    const response = await fetch ('http://localhost:6001/plants');
    const plantsData = await response.json();
    setPlants(plantsData)
    setLoading(false)
  };

  useEffect ( () => {
    getPlants()
  }, []);

  if (isLoading) {
    return (<h2>LOADING.....Please wait.....</h2>)
  };

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants}/>
    </div>
  );
}

export default App;
